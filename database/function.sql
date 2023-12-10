USE CATADOPT;

-- DROP FUNCTION --------------------------------------------------------------------------

--Drop Function JumlahJenisKucing
DROP FUNCTION IF EXISTS JumlahJenisKucing;
GO

--Drop Function TampilDetailPembeli
DROP FUNCTION IF EXISTS TampilDetailPembeli;
GO

--Drop Function CariPembeli
DROP FUNCTION IF EXISTS CariPembeli;
GO

--Drop Function CariMetodePembayaran
DROP FUNCTION IF EXISTS CariMetodePembayaran;
GO

--Drop Function CariJenisPengiriman
DROP FUNCTION IF EXISTS CariJenisPengiriman;
GO

--Drop Function CariKucing
DROP FUNCTION IF EXISTS CariKucing;
GO

--Drop Function CariTransaksi
DROP FUNCTION IF EXISTS CariTransaksi;
GO

--Drop Function CariJenisKucing
DROP FUNCTION IF EXISTS CariJenisKucing;
GO

--Drop Function CariJumlahJenisKucing
DROP FUNCTION IF EXISTS CariJumlahJenisKucing;
GO

--Drop Function HitungTotal
DROP FUNCTION IF EXISTS HitungTotal;
GO

--Drop Function SortKucingByJenis
DROP FUNCTION IF EXISTS SortKucingByJenis;
GO

--Drop Function SortKucingByUmur
DROP FUNCTION IF EXISTS SortKucingByUmur;
GO

--Drop Function TampilKucingTersedia
DROP FUNCTION IF EXISTS TampilKucingTersedia;
GO

--Drop Function TampilKucing
DROP FUNCTION IF EXISTS TampilKucing;
GO

--Drop Function TampilPembeli
DROP FUNCTION IF EXISTS TampilPembeli;
GO

--Drop Function TampilJenisKucing
DROP FUNCTION IF EXISTS TampilJenisKucing;
GO

--Drop Function TampilJenisPengiriman
DROP FUNCTION IF EXISTS TampilJenisPengiriman;
GO

--Drop Function TampilMetodePembayaran
DROP FUNCTION IF EXISTS TampilMetodePembayaran;
GO

--Drop Function TampilTransaksi
DROP FUNCTION IF EXISTS TampilTransaksi;
GO

--Drop Function TampilDetail
DROP FUNCTION IF EXISTS TampilDetail;
GO


--FUNCTION------------------------------------------------------------------------------------

--Tampilkan Jumlah kucing setiap jenis
CREATE FUNCTION JumlahJenisKucing()
RETURNS TABLE
AS
RETURN(
	SELECT
		J.ID_Jenis, J.Jenis_Kucing, COUNT(K.ID_Kucing) 'Jumlah Kucing'
	FROM Kucing K
	JOIN Jenis J ON J.ID_Jenis = K.ID_Jenis
	GROUP BY J.ID_Jenis, J.Jenis_Kucing
);

--Tampilkan Detail Pembeli
CREATE FUNCTION TampilDetailPembeli(@ID_Pembeli VARCHAR(50))
RETURNS TABLE
AS
RETURN(
	SELECT TOP(SELECT COUNT(*) FROM Detail_Transaksi)
		T.ID_Transaksi, K.Nama_Kucing, J.Jenis_Kucing, T.Total_Biaya, T.Tanggal_Transaksi
	FROM TRANSAKSI T
	JOIN Detail_Transaksi DT ON DT.ID_Transaksi = T.ID_Transaksi
	JOIN Kucing K ON K.ID_Kucing = DT.ID_Kucing
	JOIN Jenis J ON J.ID_Jenis = K.ID_Jenis
	WHERE T.ID_Pembeli = '@ID_Pembeli'
	ORDER BY T.ID_Transaksi
);

--Cari dari Tabel Pembeli
CREATE FUNCTION CariPembeli(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
	SELECT 
	*
	FROM Pembeli
	WHERE ID_Pembeli LIKE '%' + @key + '%'
       OR Nama_Pembeli LIKE '%' + @key + '%'
       OR Email LIKE '%' + @key + '%'
       OR No_Telp LIKE '%' + @key + '%'
       OR Alamat LIKE '%' + @key + '%'
);

--Cari dari tabel Metode Pembayaran
CREATE FUNCTION CariMetodePembayaran(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
    SELECT *
	FROM Metode_Pembayaran
	WHERE ID_Metode_Pembayaran LIKE '%' + @key + '%'
       OR Metode_Pembayaran LIKE '%' + @key + '%'
);

--Cari dari tabel Jenis Pengiriman
CREATE FUNCTION CariJenisPengiriman(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
    SELECT *
	FROM Jenis_Pengiriman
	WHERE ID_Jenis_Pengiriman LIKE '%' + @key + '%'
       OR Jenis_Pengiriman LIKE '%' + @key + '%'
);

--Cari dari tabel kucing
CREATE FUNCTION CariKucing(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
    SELECT 
		K.ID_Kucing, K.Nama_Kucing, K.Jenis_Kelamin, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
    FROM Kucing K
    JOIN Jenis J ON J.ID_Jenis = K.ID_Jenis
	WHERE K.Nama_Kucing LIKE '%' + @key + '%'
       OR K.ID_Kucing LIKE '%' + @key + '%'
	   OR K.Umur LIKE '%' + @key + '%'
	   OR J.Jenis_Kucing LIKE '%' + @key + '%'
	   OR K.Jenis_Kelamin LIKE '%' + @key + '%'
	   OR K.Biaya LIKE '%' + @key + '%'
       OR CAST(K.Tanggal_Masuk AS VARCHAR(50)) LIKE '%' + @key + '%'
);

--Cari dari tabel transaksi
CREATE FUNCTION CariTransaksi(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN (
    SELECT T.ID_Transaksi, P.Nama_Pembeli, JP.Jenis_Pengiriman, MP.Metode_Pembayaran, T.Tanggal_Transaksi, T.Total_Biaya
    FROM Transaksi T
    JOIN Pembeli P ON P.ID_Pembeli = T.ID_Pembeli
	JOIN Jenis_Pengiriman JP ON JP.ID_Jenis_Pengiriman = T.ID_Jenis_Pengiriman
	JOIN Metode_Pembayaran MP ON MP.ID_Metode_Pembayaran = T.ID_Metode_Pembayaran
	WHERE P.Nama_Pembeli LIKE '%' + @key + '%'
        OR JP.Jenis_Pengiriman LIKE '%' + @key + '%'
        OR MP.Metode_Pembayaran LIKE '%' + @key + '%'
        OR T.Total_Biaya LIKE '%' + @key + '%'
		OR T.ID_Transaksi LIKE '%' + @key + '%'
        OR T.Nomor_Resi LIKE '%' + @key + '%'
        OR CAST(T.Tanggal_Transaksi AS VARCHAR(50)) LIKE '%' + @key + '%'
);

--Cari dari tabel jenis kucing
CREATE FUNCTION CariJenisKucing(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
	SELECT
		*
	FROM Jenis
	WHERE ID_Jenis LIKE '%' + @key + '%'
        OR Jenis_Kucing LIKE '%' + @key + '%'
);

--Cari dari Jumlah Jenis Kucing
CREATE FUNCTION CariJumlahJenisKucing(@key VARCHAR(50))
RETURNS TABLE
AS
RETURN(
	SELECT
		JJK.*
	FROM Jenis J
	JOIN JumlahJenisKucing() JJK ON JJK.ID_Jenis = J.ID_Jenis
	WHERE J.ID_Jenis LIKE '%' + @key + '%'
        OR J.Jenis_Kucing LIKE '%' + @key + '%'
		OR JJK.[Jumlah Kucing] LIKE '%' + @key + '%'
);

--Menghitung jumlah total biaya dari suatu transaksi
CREATE FUNCTION HitungTotal(@id_transaksi VARCHAR(50))
RETURNS DECIMAL
AS 
BEGIN
	DECLARE @total_biaya DECIMAL;

	SELECT @total_biaya = SUM(K.Biaya)
	FROM Detail_Transaksi DT
	JOIN Kucing K ON DT.ID_Kucing = K.ID_Kucing
	WHERE DT.ID_Transaksi = @id_transaksi;

	RETURN @total_biaya;
END;

DROP FUNCTION HITUNGTOTAL

--Mengurutkan data kucing berdasarkan Jenisnya
CREATE FUNCTION SortKucingByJenis (@sort INT)
RETURNS TABLE
AS
RETURN
(
    SELECT TOP (SELECT COUNT(*) FROM Kucing)
		K.ID_Kucing, K.Nama_Kucing, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
    FROM Kucing K
	JOIN JENIS J ON J.ID_Jenis = K.ID_Jenis
    ORDER BY 
        CASE WHEN @sort = 1 THEN K.ID_Jenis END ASC,
        CASE WHEN @sort = 2 THEN K.ID_Jenis END DESC
);

SELECT * FROM SortKucingByJenis(2);

--Mengurutkan data kucing berdasarkan Umurnya
CREATE FUNCTION SortKucingByUmur (@sort INT)
RETURNS TABLE
AS
RETURN
(
    SELECT TOP (SELECT COUNT(*) FROM Kucing)
		K.ID_Kucing, K.Nama_Kucing, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
    FROM Kucing K
	JOIN JENIS J ON J.ID_Jenis = K.ID_Jenis
    ORDER BY 
        CASE WHEN @sort = 1 THEN K.Umur END ASC,
        CASE WHEN @sort = 2 THEN K.Umur END DESC
);

--Menampilkan data kucing yang tersedia
CREATE FUNCTION TampilKucingTersedia ()
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		K.ID_Kucing, K.Nama_Kucing, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
    FROM Kucing K
	JOIN JENIS J ON J.ID_Jenis = K.ID_Jenis
	WHERE K.Status = 'Tersedia'
);

--Menampilkan semua data kucing
CREATE FUNCTION TampilKucing ()
RETURNS TABLE
AS 
RETURN
(
	SELECT
		K.ID_Kucing, K.Nama_Kucing, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
    FROM Kucing K
	JOIN JENIS J ON J.ID_Jenis = K.ID_Jenis
);

--Menampilkan semua data Pembeli
CREATE FUNCTION TampilPembeli ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Pembeli
);

--Menampilkan semua data jenis kucing
CREATE FUNCTION TampilJenisKucing ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Jenis
);

--Menampilkan semua data jenis pengiriman
CREATE FUNCTION TampilJenisPengiriman ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Jenis_Pengiriman
);

--Menampilkan semua data jenis pengiriman
CREATE FUNCTION TampilMetodePembayaran ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Metode_Pembayaran
);

--Menampilkan semua data Transaksi
CREATE FUNCTION TampilTransaksi ()
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		T.ID_Transaksi, P.Nama_Pembeli, T.Total_Biaya, T.Nomor_Resi, T.Tanggal_Transaksi
	FROM Transaksi T
	JOIN Pembeli P ON T.ID_Pembeli = P.ID_Pembeli
);

--Menampilkan semua data detail transaksi berdasarkan id transaksi
CREATE FUNCTION TampilDetail (@id_transaksi VARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		K.ID_Kucing, K.Nama_Kucing 'Nama Kucing', J.Jenis_Kucing, K.Jenis_Kelamin, K.Biaya
	FROM Detail_Transaksi DT
	JOIN Kucing K ON K.ID_Kucing = DT.ID_Kucing
	JOIN Jenis J ON K.ID_Jenis = J.ID_Jenis
	WHERE DT.ID_Transaksi = 'T1'
);

