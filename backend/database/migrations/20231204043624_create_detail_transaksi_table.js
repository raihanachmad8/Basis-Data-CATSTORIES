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
        INSERT INTO Detail_Transaksi (ID_Detail_Transaksi, ID_Transaksi, ID_Kucing)
        VALUES (@ID_Detail_Transaksi, @ID_Transaksi, @ID_Kucing);
        UPDATE Transaksi SET Total_Biaya = dbo.HitungTotal(@ID_Transaksi) WHERE ID_Transaksi = @ID_Transaksi;
    END
    `)
}

export function down(knex) {
    return knex.schema
    .dropTable("Detail_Transaksi")
    .raw('DROP PROCEDURE IF EXISTS tambahDetailTransaksi')
}