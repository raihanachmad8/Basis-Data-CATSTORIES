export function up(knex) {
    return knex.schema
    .createTable("Transaksi", (table) => {
        table.string("ID_Transaksi", 50).primary()
        table.string("ID_Pembeli", 50)
        table.string("ID_Jenis_Pengiriman", 50)
        table.string("ID_Metode_Pembayaran", 50)
        table.decimal("Total_Biaya").notNullable()
        table.string("Nomor_Resi", 30)
        table.date('Tanggal_Transaksi').notNullable()
        table.text("Pesan")
    })
    .raw(`
    CREATE PROCEDURE tambahTransaksi
        @ID_Transaksi VARCHAR(50),
        @ID_Pembeli VARCHAR(50),
        @ID_Jenis_Pengiriman VARCHAR(50),
        @ID_Metode_Pembayaran VARCHAR(50),
        @Total_Biaya DECIMAL,
        @Nomor_Resi VARCHAR(30),
        @Tanggal_Transaksi DATE,
        @Pesan TEXT
    AS
    BEGIN
        INSERT INTO Transaksi (ID_Transaksi, ID_Pembeli, ID_Jenis_Pengiriman, ID_Metode_Pembayaran, Total_Biaya, Nomor_Resi, Tanggal_Transaksi, Pesan)
        VALUES (@ID_Transaksi, @ID_Pembeli, @ID_Jenis_Pengiriman, @ID_Metode_Pembayaran, @Total_Biaya, @Nomor_Resi, @Tanggal_Transaksi, @Pesan);
    END;
    `)
    .raw(`
    CREATE PROCEDURE updateTransaksi
        @ID_Transaksi VARCHAR(50),
        @ID_Pembeli VARCHAR(50),
        @ID_Jenis_Pengiriman VARCHAR(50),
        @ID_Metode_Pembayaran VARCHAR(50),
        @Total_Biaya DECIMAL,
        @Nomor_Resi VARCHAR(30),
        @Tanggal_Transaksi DATE,
        @Pesan TEXT
    AS
    BEGIN
    UPDATE Transaksi
    SET
        ID_Pembeli = @ID_Pembeli,
        ID_Jenis_Pengiriman = @ID_Jenis_Pengiriman,
        ID_Metode_Pembayaran = @ID_Metode_Pembayaran,
        Total_Biaya = @Total_Biaya,
        Nomor_Resi = @Nomor_Resi,
        Tanggal_Transaksi = @Tanggal_Transaksi,
        Pesan = @Pesan
    WHERE ID_Transaksi = @ID_Transaksi;
    END;
    `)
    .raw(`
    CREATE PROCEDURE HapusTransaksi
        @ID_Transaksi VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Transaksi  WHERE ID_Transaksi = @ID_Transaksi;
        DELETE FROM Detail_Transaksi WHERE ID_Transaksi = @ID_Transaksi;
    END;
    `)

}

export function down(knex) {
    return knex.schema
    .dropTable("Transaksi")
    .raw('DROP PROCEDURE IF EXISTS tambahTransaksi')
    .raw('DROP PROCEDURE IF EXISTS updateTransaksi')
    .raw('DROP PROCEDURE IF EXISTS HapusTransaksi')
}