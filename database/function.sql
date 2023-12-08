/* 
CREATE PROCEDURE UpdateAlamatPelanggan
    @Alamat VARCHAR(200),
    @IDPelanggan INT
AS
BEGIN
    UPDATE Pelanggan 
    SET Alamat = @Alamat 
    WHERE ID_Pelanggan = @IDPelanggan
END;

EXEC UpdateAlamatPelanggan @Alamat = 'Jl. Maju No. 987', @IDPelanggan = 105;

Select * from Pelanggan where ID_Pelanggan = 105

-- 15.Tampilkan total gaji yang dibayarkan per cabang
SELECT
	C.ID_Cabang,
	C.Nama_Cabang,
	SUM(K.Gaji) 'Gaji yang Dibayarkan'
FROM Cabang C
LEFT JOIN Karyawan K ON K.ID_Cabang = C.ID_Cabang
GROUP BY C.ID_Cabang, C.Nama_Cabang;

create function HistoyPeminjaman
(
	@bookid int
)
returns table
as
return
(
select
    b.BookID,
    b.Title,
    b.Author,
    l.LoanID,
    u.UserName,
    l.LoanDate,
    l.ReturnDate
from Loans l
join Books b on l.BookID = b.BookID
join Users u on l.UserID = u.UserID
where b.BookID = @bookid
)
*/

USE CATADOPT;

--FUNCTION

--Menghitung jumlah total biaya dari suatu transaksi
CREATE FUNCTION HitungTotal(@id_transaksi VARCHAR(50))
RETURNS DECIMAL
AS 
BEGIN
	DECLARE @total_biaya DECIMAL;

	SELECT @total_biaya = SUM(K.Biaya)
	FROM Transaksi T
	JOIN Detail_Transaksi DT ON DT.ID_Transaksi = T.ID_Transaksi
	JOIN Kucing K ON DT.ID_Kucing = K.ID_Kucing
	WHERE T.ID_Transaksi = @id_transaksi;

	RETURN ISNULL(@total_biaya, 0);
END;


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

SELECT * FROM SortKucingByUmur(1);

--Menampilkan data kucing yang tersedia
CREATE FUNCTION ShowAvailableCat ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Kucing
	WHERE Status = 'Tersedia'
);

SELECT * FROM ShowAvailableCat();

--Menampilkan semua data kucing
CREATE FUNCTION ShowCat ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Kucing
);

SELECT * FROM ShowCat();

--Menampilkan semua data Pembeli
CREATE FUNCTION ShowCust ()
RETURNS TABLE
AS 
RETURN
(
	SELECT *
	FROM Pembeli
);

SELECT * FROM ShowCust();

--Menampilkan semua data Transaksi
CREATE FUNCTION ShowTransaction ()
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		T.ID_Transaksi, BELI.Nama 'Nama Pembeli', KIRIM.Jenis_Pengiriman , BAYAR.Metode_Pembayaran, T.Tanggal_Transaksi, T.Pesan
	FROM Transaksi T
	JOIN Pembeli BELI ON BELI.ID_Pembeli = T.ID_Pembeli
	JOIN Pengiriman KIRIM ON KIRIM.ID_Pengiriman = T.ID_Pengiriman
	JOIN Pembayaran BAYAR ON BAYAR.ID_Pembayaran = T.ID_Pembayaran
);

SELECT * FROM ShowTransaction();

--Menampilkan semua data detail transaksi berdasarkan id transaksi
CREATE FUNCTION ShowDetail (@id_transaksi VARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		ST.ID_Transaksi, ST.[Nama Pembeli], ST.Jenis_Pengiriman, ST.Metode_Pembayaran, ST.Tanggal_Transaksi, ST.Pesan,
		K.Nama 'Nama Kucing'
	FROM Detail_Transaksi DT
	JOIN ShowTransaction() ST ON ST.ID_Transaksi = DT.ID_Transaksi
	JOIN Kucing K ON K.ID_Kucing = DT.ID_Kucing
	WHERE DT.ID_Transaksi = @id_transaksi
);

--Menampilkan semua data pengiriman pada transaksi
CREATE FUNCTION DataPengiriman (@id_transaksi VARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		T.ID_Transaksi, P.Jenis_Pengiriman, A.Jalan, A.Kota, A.Provinsi, A.Kode_Pos, P.Nomor_Resi
	FROM Transaksi T
	JOIN Pengiriman P ON P.ID_Pengiriman = T.ID_Pengiriman
	JOIN Alamat A ON A.ID_Alamat = P.ID_Alamat
	WHERE T.ID_Transaksi = @id_transaksi
);

--Menampilkan semua data pembayaran pada transaksi
CREATE FUNCTION DataPengiriman (@id_transaksi VARCHAR(50))
RETURNS TABLE
AS 
RETURN
(
	SELECT 
		T.ID_Transaksi, P.Metode_Pembayaran, P.Total_Biaya
	FROM Transaksi T
	JOIN Pembayaran P ON P.ID_Pembayaran = T.ID_Pembayaran	
	WHERE T.ID_Transaksi = @id_transaksi
);





