
export function up(knex) {
    return knex.schema.table('produk', (table) => {
        table.foreign('IDPemasok').references('IDPemasok').inTable('pemasok').onDelete('SET NULL');
    });
}


export function down(knex) {
    return knex.schema.table('produk', (table) => {
        table.dropForeign('IDPemasok');
    });
};
