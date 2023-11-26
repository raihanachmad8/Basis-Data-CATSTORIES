
export function up(knex) {
    return knex.schema.createTable('produk', (table) => {
        table.string('IDProduk').primary();
        table.string('NamaProduk').notNullable();
        table.text('Deskripsi');
        table.decimal('Harga').notNullable();
        table.integer('JumlahStok').notNullable();
        table.string('IDPemasok');
    });
};

export function down(knex) {
    return knex.schema.dropTable('produk');
}
