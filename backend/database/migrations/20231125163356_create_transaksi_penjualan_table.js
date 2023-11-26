
export function up(knex) {
    return knex.schema.createTable('transaksi_penjualan', function (table) {
        table.string('IDTransaksi').primary();
        table.date('TanggalTransaksi').notNullable();
        table.decimal('TotalHarga').notNullable();
        table.string('IDPelanggan');
    });
}


export function down(knex) {
    return knex.schema.dropTable('transaksi_penjualan');
}

