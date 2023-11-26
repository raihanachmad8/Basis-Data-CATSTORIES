
export function up(knex) {
    return knex.schema.createTable('pelanggan', function (table) {
        table.string('IDPelanggan').primary();
        table.string('NamaPelanggan').notNullable();
        table.text('Alamat');
        table.string('NomorTelepon');
        table.string('Email');
    });
}

export function down(knex) {
    return knex.schema.dropTable('pelanggan');
}

