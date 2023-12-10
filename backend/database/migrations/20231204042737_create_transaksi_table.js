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

}

export function down(knex) {
    return knex.schema.dropTable("Transaksi");
}