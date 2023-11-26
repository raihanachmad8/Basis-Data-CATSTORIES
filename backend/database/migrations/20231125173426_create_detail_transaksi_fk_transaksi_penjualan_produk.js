
export function up(knex) {
    return knex.schema.table('detail_transaksi', (table) => {
        table.foreign('IDTransaksi').references('IDTransaksi').inTable('transaksi_penjualan').onDelete('SET NULL');
        table.foreign('IDProduk').references('IDProduk').inTable('produk').onDelete('SET NULL');
    });
}
export function down(knex) {
    return knex.schema.table('detail_transaksi', (table) => {
        table.dropForeign('IDTransaksi');
        table.dropForeign('IDProduk');
    });
}
