export function up(knex) {
    return knex.schema.createTable("Transaksi", (table) => {
        table.string("ID_Transaksi", 50).primary()
        table.string("ID_Pembeli", 50)
        table.string("ID_Pengiriman", 50)
        table.string("ID_Pembayaran", 50)
        table.date('Tanggal_Transaksi').notNullable()
        table.text("Pesan")
    })
}

export function down(knex) {
    return knex.schema.dropTable("Transaksi");
}