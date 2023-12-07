export function up(knex) {
    return knex.schema.createTable("Alamat", (table) => {
        table.string("ID_Alamat", 50).primary();
        table.text("Jalan").notNullable();
        table.string("Kota", 50).notNullable();
        table.string("Provinsi", 50).notNullable();
        table.string("Kode_Pos", 5).notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable("Alamat");
}
