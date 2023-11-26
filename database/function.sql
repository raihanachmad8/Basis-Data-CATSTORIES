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