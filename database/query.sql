DROP DATABASE FinalProjectBasdat;

CREATE DATABASE FinalProjectBasdat;

USE FinalProjectBasdat;

CREATE TABLE Pemasok(
	IDPemasok			INT				NOT NULL,
	NamaPemasok			VARCHAR(100)	NOT NULL,
	Alamat				TEXT			NOT NULL,
	NomorTelepon		VARCHAR(15)		NOT NULL,
	Email				NVARCHAR(255)	NOT NULL,
	PRIMARY KEY(IDPemasok)				
);

CREATE TABLE Produk(
	IDProduk			INT				NOT NULL,
	NamaProduk			VARCHAR(100)	NOT NULL,
	Deskripsi			TEXT			NOT NULL,
	Harga				Decimal			NOT NULL,
	JumlahStok			INT				NOT NULL,
	IDPemasok			INT				NOT NULL,
	PRIMARY KEY(IDProduk),
	FOREIGN KEY(IDPemasok) REFERENCES Pemasok(IDPemasok)
);

CREATE TABLE Pelanggan (
    IDPelanggan		INT				NOT NULL,
    NamaPelanggan	VARCHAR(100)	NOT NULL,
    Alamat			TEXT			NOT NULL,
    NomorTelepon	VARCHAR(15)		NOT NULL,
    Email			NVARCHAR(255)	NOT NULL,
	PRIMARY KEY(IDPelanggan)
);

CREATE TABLE TransaksiPenjualan (
    IDTransaksi			INT				NOT NULL,
    TanggalTransaksi	DATE			NOT NULL,
    TotalHarga			DECIMAL			NOT NULL,
    IDPelanggan			INT				NOT NULL,
	PRIMARY KEY(IDTransaksi),
    FOREIGN KEY (IDPelanggan) REFERENCES Pelanggan(IDPelanggan)
);

CREATE TABLE DetailTransaksi (
    IDDetailTransaksi	INT		NOT NULL,
    IDTransaksi			INT		NOT NULL,
    IDProduk			INT		NOT NULL,
    Jumlah				INT		NOT NULL,
    HargaSatuan			DECIMAL	NOT NULL,
	PRIMARY KEY(IDDetailTransaksi),
    FOREIGN KEY (IDTransaksi) REFERENCES TransaksiPenjualan(IDTransaksi),
    FOREIGN KEY (IDProduk) REFERENCES Produk(IDProduk)
);

CREATE TABLE CatatanTransaksi (
    IDCatatanTransaksi	INT				NOT NULL,
    IDTransaksi			INT				NOT NULL,
    Tindakan			VARCHAR(10)		NOT NULL,
	TabelSasaran		VARCHAR(50),
    IDRekamanSasaran	INT,
    Timestamp			TIMESTAMP		NOT NULL,
	PRIMARY KEY(IDCatatanTransaksi),
    FOREIGN KEY (IDTransaksi) REFERENCES TransaksiPenjualan(IDTransaksi)
);

--Fungsi untuk menghitung total harga dari sebuah transaksi penjualan
CREATE FUNCTION COUNTPRICE(@IDTransaksi INT)
RETURNS DECIMAL
AS
BEGIN
    DECLARE @TotalHarga DECIMAL;
    
    SELECT @TotalHarga = SUM(Jumlah * HargaSatuan)
    FROM DetailTransaksi
    WHERE IDTransaksi = @IDTransaksi;

    RETURN ISNULL(@TotalHarga, 0); -- Use ISNULL to handle NULL values, if necessary
END;

--Fungsi untuk melihat riwayat perubahan stok produk
-- Fungsi untuk melihat riwayat perubahan stok produk
CREATE FUNCTION RiwayatPerubahanStokFunction(@productID INT)
RETURNS TABLE
AS
RETURN
(
    SELECT
        DT.IDTransaksi,
        TP.TanggalTransaksi,
        DT.Jumlah,
        DT.HargaSatuan,
        CT.Tindakan,
        CT.Timestamp
    FROM
        DetailTransaksi DT
        JOIN TransaksiPenjualan TP ON DT.IDTransaksi = TP.IDTransaksi
        JOIN CatatanTransaksi CT ON DT.IDTransaksi = CT.IDTransaksi
    WHERE
        DT.IDProduk = @productID
);

--Implementasikan prosedur tersimpan untuk menambahkan produk baru ke dalam sistem.
CREATE PROCEDURE TambahProduk
    @NamaProduk VARCHAR(255),
    @Deskripsi TEXT,
    @Harga DECIMAL(18, 2),
    @JumlahStok INT,
    @IDPemasok INT
AS
BEGIN
    INSERT INTO Produk (NamaProduk, Deskripsi, Harga, JumlahStok, IDPemasok)
    VALUES (@NamaProduk, @Deskripsi, @Harga, @JumlahStok, @IDPemasok);
END;

--Buat prosedur tersimpan untuk mencatat transaksi penjualan, termasuk detail item yang dibeli.
CREATE PROCEDURE CatatTransaksiPenjualan
    @TanggalTransaksi DATE,
    @TotalHarga DECIMAL,
    @IDPelanggan INT,
    @DetailTransaksi XML
AS
BEGIN
    DECLARE @TransaksiID INT;

    -- Memasukkan data transaksi penjualan
    INSERT INTO TransaksiPenjualan (TanggalTransaksi, TotalHarga, IDPelanggan)
    VALUES (@TanggalTransaksi, @TotalHarga, @IDPelanggan);

    -- Mengambil ID transaksi yang baru saja dimasukkan
    SET @TransaksiID = SCOPE_IDENTITY();

    -- Memasukkan detail transaksi menggunakan XML
    INSERT INTO DetailTransaksi (IDTransaksi, IDProduk, Jumlah, HargaSatuan)
    SELECT
        @TransaksiID,
        Tbl.Col.value('(IDProduk)[1]', 'INT'),
        Tbl.Col.value('(Jumlah)[1]', 'INT'),
        Tbl.Col.value('(HargaSatuan)[1]', 'DECIMAL')
    FROM @DetailTransaksi.nodes('/Details/Detail') AS Tbl(Col);
END;

--Buat prosedur tersimpan untuk mengelola pemasok (tambah, perbarui, hapus).
CREATE PROCEDURE KelolaPemasok
    @IDPemasok INT,
    @NamaPemasok VARCHAR(255),
    @Alamat TEXT,
    @NomorTelepon VARCHAR(20),
    @Email VARCHAR(255),
    @Mode CHAR(1) -- 'T' for Tambah, 'P' for Perbarui, 'H' for Hapus
AS
BEGIN
    IF @Mode = 'T'
    BEGIN
        -- Tambah Pemasok
        INSERT INTO Pemasok (IDPemasok, NamaPemasok, Alamat, NomorTelepon, Email)
        VALUES (@IDPemasok, @NamaPemasok, @Alamat, @NomorTelepon, @Email);
    END
    ELSE IF @Mode = 'P'
    BEGIN
        -- Perbarui Pemasok
        UPDATE Pemasok
        SET NamaPemasok = @NamaPemasok,
            Alamat = @Alamat,
            NomorTelepon = @NomorTelepon,
            Email = @Email
        WHERE IDPemasok = @IDPemasok;
    END
    ELSE IF @Mode = 'H'
    BEGIN
        -- Hapus Pemasok
        DELETE FROM Pemasok WHERE IDPemasok = @IDPemasok;
    END
END;
