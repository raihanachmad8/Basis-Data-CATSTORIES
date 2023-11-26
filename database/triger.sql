-- Create the trigger for table Produk
CREATE TRIGGER ProdukTrigger
ON Produk
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    DECLARE @Tindakan VARCHAR(20);

    IF EXISTS (SELECT * FROM inserted)
    BEGIN
        IF EXISTS (SELECT * FROM deleted)
        BEGIN
            SET @Tindakan = 'Perbarui';
        END
        ELSE
        BEGIN
            SET @Tindakan = 'Tambah';
        END
    END
    ELSE
    BEGIN
        SET @Tindakan = 'Hapus';
    END

    INSERT INTO CatatanTransaksi (IDTransaksi, Tindakan, TabelSasaran)
    SELECT 
        COALESCE(i.IDProduk, d.IDProduk), 
        @Tindakan, 
        'Produk'
    FROM inserted i
    FULL OUTER JOIN deleted d ON i.IDProduk = d.IDProduk;
END;