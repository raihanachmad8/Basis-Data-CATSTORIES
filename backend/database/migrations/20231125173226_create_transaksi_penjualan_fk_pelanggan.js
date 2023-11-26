
export function up(knex) {
    return knex.schema.table('transaksi_penjualan', (table) => {
        table.foreign('IDPelanggan').references('IDPelanggan').inTable('pelanggan').onDelete('SET NULL');
    });
}

export function down(knex) {
    return knex.schema.table('transaksi_penjualan', (table) => {
        table.dropForeign('IDPelanggan');
    });
}
