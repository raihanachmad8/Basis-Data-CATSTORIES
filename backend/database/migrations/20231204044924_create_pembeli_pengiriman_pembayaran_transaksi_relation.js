export function up(knex) {
    return knex.schema.table("Transaksi", (table) => {
        table.foreign("ID_Pembeli").references("ID_Pembeli").inTable("Pembeli");
        table.foreign("ID_Pengiriman").references("ID_Pengiriman").inTable("Pengiriman");
        table.foreign("ID_Pembayaran").references("ID_Pembayaran").inTable("Pembayaran");
    })
}

export function down(knex) {
    return knex.schema.table("Transaksi", (table) => {
        table.dropForeign("ID_Pembeli");
        table.dropForeign("ID_Pengiriman");
        table.dropForeign("ID_Pembayaran");
    })
}