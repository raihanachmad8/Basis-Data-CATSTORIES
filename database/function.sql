USE CATADOPT;

--FUNCTION------------------------------------------------------------------------------------

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
	*
    FROM Kucing
    ORDER BY 
        CASE WHEN @sort = 1 THEN ID_Jenis END ASC,
        CASE WHEN @sort = 2 THEN ID_Jenis END DESC
);

SELECT * FROM SortKucingByJenis(2);

--Mengurutkan data kucing berdasarkan Umurnya
CREATE FUNCTION SortKucingByUmur (@sort INT)
RETURNS TABLE
AS
RETURN
(
    SELECT TOP (SELECT COUNT(*) FROM Kucing)
	*
    FROM Kucing
    ORDER BY 
        CASE WHEN @sort = 1 THEN Umur END ASC,
        CASE WHEN @sort = 2 THEN Umur END DESC
);

--Menampilkan data kucing yang tersedia
CREATE FUNCTION TampilKucingTersedia ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Kucing
	WHERE Status = 'Tersedia'
);

--Menampilkan semua data kucing
CREATE FUNCTION TampilKucing ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Kucing
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
		T.ID_Transaksi, P.Nama_Pembeli, KIRIM.Jenis_Pengiriman, BAYAR.Metode_Pembayaran, T.Total_Biaya, T.Nomor_Resi, T.Tanggal_Transaksi, T.Pesan
	FROM Transaksi T
	JOIN Pembeli P ON T.ID_Pembeli = P.ID_Pembeli
	JOIN Jenis_Pengiriman KIRIM ON T.ID_Jenis_Pengiriman = KIRIM.ID_Jenis_Pengiriman
	JOIN Metode_Pembayaran BAYAR ON T.ID_Metode_Pembayaran = BAYAR.ID_Metode_Pembayaran
);

--Menampilkan semua data detail transaksi berdasarkan id transaksi
CREATE FUNCTION TampilDetail (@id_transaksi VARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		ST.ID_Transaksi, ST.Nama_Pembeli, ST.Jenis_Pengiriman, ST.Metode_Pembayaran, ST.Total_Biaya, ST.Nomor_Resi, ST.Tanggal_Transaksi, ST.Pesan,
		K.ID_Kucing, K.Nama_Kucing 'Nama Kucing', J.Jenis_Kucing, K.Jenis_Kelamin, K.Biaya
	FROM Detail_Transaksi DT
	JOIN TampilTransaksi() ST ON ST.ID_Transaksi = DT.ID_Transaksi
	JOIN Kucing K ON K.ID_Kucing = DT.ID_Kucing
	JOIN Jenis J ON K.ID_Jenis = J.ID_Jenis
	WHERE DT.ID_Transaksi = @id_transaksi
);

