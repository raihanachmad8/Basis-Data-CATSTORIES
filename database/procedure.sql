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