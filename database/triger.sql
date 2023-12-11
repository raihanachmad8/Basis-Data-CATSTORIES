-- Pemicu untuk menghapus data kucing lama

DROP TRIGGER DeleteOldKucing;

CREATE TRIGGER DeleteOldKucing
ON Detail_Transaksi
FOR DELETE
AS
BEGIN
    DELETE FROM Kucing 
	WHERE ID_Kucing IN (
    SELECT DT.ID_Kucing
    FROM Detail_Transaksi DT
    JOIN Transaksi T ON DT.ID_Transaksi = T.ID_Transaksi
    WHERE DATEDIFF(MONTH, T.Tanggal_Transaksi, GETDATE()) > 6
);
END;

-- Pemicu untuk menghapus status kucing
DROP TRIGGER UpdateStatusKucing;

CREATE TRIGGER UpdateStatusKucing
ON Detail_Transaksi
AFTER INSERT, UPDATE
AS
BEGIN
    UPDATE Kucing
    SET Status = 'Tidak Tersedia'
    WHERE ID_Kucing IN (SELECT ID_Kucing FROM Detail_Transaksi);
END;

