export function up(knex) {
    return knex.schema.table("Transaksi", (table) => {
        table.foreign("ID_Pembeli").references("ID_Pembeli").inTable("Pembeli");
        table.foreign("ID_Jenis_Pengiriman").references("ID_Jenis_Pengiriman").inTable("Jenis_Pengiriman").onDelete('SET NULL').onUpdate('CASCADE')
        table.foreign("ID_Metode_Pembayaran").references("ID_Metode_Pembayaran").inTable("Metode_Pembayaran").onDelete('SET NULL').onUpdate('CASCADE')
    })
}

export function down(knex) {
    return knex.schema.table("Transaksi", (table) => {
        table.dropForeign("ID_Pembeli");
        table.dropForeign("ID_Jenis_Pengiriman");
        table.dropForeign("ID_Metode_Pembayaran");
    })
}