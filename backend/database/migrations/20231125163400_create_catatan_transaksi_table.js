
export function up(knex) {
    return knex.schema.createTable('catatan_transaksi', function (table) {
        table.string('IDCatatanTransaksi').primary();
        table.string('IDTransaksi');
        table.string('Tindakan').checkIn(['Tambah', 'Perbarui', 'Hapus']).notNullable();
        table.string('TabelSasaran').notNullable().defaultTo('transaksi_penjualan').checkIn(['transaksi_penjualan', 'produk']);
        table.string('IDRekamanSasaran').notNullable;
        table.timestamp('Timestamp').defaultTo(knex.fn.now());
    });
}

export function down(knex) {
    return knex.schema.dropTable('catatan_transaksi');
}

