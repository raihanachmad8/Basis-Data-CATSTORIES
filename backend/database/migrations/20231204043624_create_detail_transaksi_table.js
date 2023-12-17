export function up(knex) {
    return knex.schema.createTable("Detail_Transaksi", (table) => {
        table.string("ID_Detail_Transaksi", 50).primary()
        table.string("ID_Transaksi", 50)
        table.string("ID_Kucing", 50)
    })        
    .raw(`
    CREATE PROCEDURE tambahDetailTransaksi
        @ID_Detail_Transaksi VARCHAR(50),
        @ID_Transaksi VARCHAR(50),
        @ID_Kucing VARCHAR(50)
    AS
    BEGIN
    -- Insert record into Detail_Transaksi
    INSERT INTO Detail_Transaksi (ID_Detail_Transaksi, ID_Transaksi, ID_Kucing)
    VALUES (@ID_Detail_Transaksi, @ID_Transaksi, @ID_Kucing);

    -- Update status of the cat to "Tidak Tersedia"
    UPDATE Kucing
    SET Status = 'Tidak Tersedia'
    WHERE ID_Kucing = @ID_Kucing;

    -- Update Total_Biaya in Transaksi
    UPDATE Transaksi
    SET Total_Biaya = dbo.HitungTotal(@ID_Transaksi)
    END
    `)
    .raw(`
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
    `)
}

export function down(knex) {
    return knex.schema
    .dropTable("Detail_Transaksi")
    .raw('DROP PROCEDURE IF EXISTS tambahDetailTransaksi')
}