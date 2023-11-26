
export function up(knex) {
    return knex.schema.createTable('pemasok', function (table) {
        table.string('IDPemasok').primary();
        table.string('NamaPemasok').notNullable();
        table.text('Alamat');
        table.string('NomorTelepon');
        table.string('Email');
    });
}

export function down(knex) {
    return knex.schema.dropTable('pemasok');
}
