export function up(knex) {
    return knex.schema.createTable("Jenis", (table) => {
        table.string("ID_Jenis", 50).primary();
        table.string("Jenis_Kucing", 100).notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable("Jenis");
}
