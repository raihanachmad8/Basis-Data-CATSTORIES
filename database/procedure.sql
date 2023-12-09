USE CATADOPT;

--Menambahkan data kucing baru ke dalam sistem
CREATE PROCEDURE TambahKucing
	@ID_Kucing VARCHAR(50),
    @ID_Jenis VARCHAR(50),
    @Nama_Kucing VARCHAR(50),
    @Foto VARCHAR(100),
    @Umur SMALLINT,
    @Jenis_Kelamin VARCHAR(6),
    @Tanggal_Masuk DATE,
    @Biaya DECIMAL,
    @Status VARCHAR(10),
    @Keterangan TEXT
AS
BEGIN
	INSERT INTO Kucing (ID_Kucing, ID_Jenis, Nama_Kucing, Foto, Umur, Jenis_Kelamin, Tanggal_Masuk, Biaya, Status, Keterangan) VALUES
	(@ID_Kucing, @ID_Jenis, @Nama_Kucing, @Foto, @Umur, @Jenis_Kelamin, @Tanggal_Masuk, @Biaya, @Status, @Keterangan);
END;

-- Contoh cara pake e
EXEC TambahKucing 'K1', 'J1', 'Fluffy', 'fluffy.jpg', 2, 'Betina', '2023-12-09', 50.00, 'Tersedia', 'Friendly and playful cat';


--Menambahkan data pembeli baru ke dalam sistem
CREATE PROCEDURE TambahPembeli
	@ID_Pembeli VARCHAR(50),
    @Nama_Pembeli VARCHAR(100),
    @Email NVARCHAR(255),
    @No_Telp VARCHAR(15),
    @Alamat TEXT
AS
BEGIN
	INSERT INTO Pembeli (ID_Pembeli, Nama_Pembeli, Email, No_Telp, Alamat) VALUES
	(@ID_Pembeli, @Nama_Pembeli, @Email, @No_Telp, @Alamat);
END;

--Menambahkan data transaksi baru ke dalam sistem
-- Create a stored procedure to insert data into Transaksi and Detail_Transaksi tables
CREATE PROCEDURE Tambah Transaksi
    @ID_Transaksi VARCHAR(50),
    @ID_Pembeli VARCHAR(50),
    @ID_Jenis_Pengiriman VARCHAR(50),
    @ID_Metode_Pembayaran VARCHAR(50),
    @Nomor_Resi VARCHAR(30),
    @Tanggal_Transaksi DATE,
    @Pesan TEXT,
    @ID_Detail_Transaksi VARCHAR(50),
    @ID_Kucing VARCHAR(50)
AS
BEGIN
    -- Insert into Transaksi table
    INSERT INTO Transaksi (ID_Transaksi, ID_Pembeli, ID_Jenis_Pengiriman, ID_Metode_Pembayaran, Total_Biaya, Nomor_Resi, Tanggal_Transaksi, Pesan)
    VALUES (@ID_Transaksi, @ID_Pembeli, @ID_Jenis_Pengiriman, @ID_Metode_Pembayaran, dbo.HitungTotal(@ID_Transaksi), @Nomor_Resi, @Tanggal_Transaksi, @Pesan);

    -- Insert into Detail_Transaksi table
    INSERT INTO Detail_Transaksi (ID_Detail_Transaksi, ID_Transaksi, ID_Kucing)
    VALUES (@ID_Detail_Transaksi, @ID_Transaksi, @ID_Kucing);
END;

--Menambahkan data jenis kucing baru ke dalam sistem
CREATE PROCEDURE TambahJenis
    @ID_Jenis VARCHAR(50),
    @Jenis_Kucing VARCHAR(50)
AS
BEGIN
    INSERT INTO Jenis (ID_Jenis, Jenis_Kucing)
    VALUES (@ID_Jenis, @Jenis_Kucing);
END;

--Menghapus data kucing ke dalam sistem

--Menghapus data pembeli ke dalam sistem

--Menghapus data transaksi ke dalam sistem

--Menghapus data jenis kucing ke dalam sistem

--Mengupdate data kucing ke dalam sistem

--Mengupdate data pembeli ke dalam sistem

--Mengupdate data transaksi ke dalam sistem

--Mengupdate data jenis kucing ke dalam sistem
