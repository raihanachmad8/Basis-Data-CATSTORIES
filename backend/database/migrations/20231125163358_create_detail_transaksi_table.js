
export function up(knex) {
    return knex.schema.createTable('detail_transaksi', function (table) {
        table.string('IDDetailTransaksi').primary();
        table.string('IDTransaksi');
        table.string('IDProduk');
        table.integer('Jumlah').notNullable();
        table.decimal('HargaSatuan').notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable('detail_transaksi');
}
