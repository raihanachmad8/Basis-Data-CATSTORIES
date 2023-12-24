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
    END
    `)
}

export function down(knex) {
    return knex.schema
    .dropTable("Detail_Transaksi")
    .raw('DROP FUNCTION IF EXISTS HitungTotal')
    .raw('DROP PROCEDURE IF EXISTS tambahDetailTransaksi')
}