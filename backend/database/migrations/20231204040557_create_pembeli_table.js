export function up(knex) {
    return knex.schema.createTable("Pembeli", (table) => {
        table.string("ID_Pembeli", 50).primary();
        table.string("Nama", 100).notNullable();
        table.text("Email").notNullable();
        table.string("No_Telp", 15).notNullable();
        table.text("Alamat").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable("Pembeli");
}
