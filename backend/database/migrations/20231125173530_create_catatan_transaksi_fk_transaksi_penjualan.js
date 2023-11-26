export function up(knex) {
    return knex.schema.table('catatan_transaksi', (table) => {
        table.foreign('IDTransaksi').references('IDTransaksi').inTable('transaksi_penjualan').onDelete('SET NULL');
    });
}

export function down(knex) {
    return knex.schema.table('catatan_transaksi', (table) => {
        table.dropForeign('IDTransaksi');
    });
}
