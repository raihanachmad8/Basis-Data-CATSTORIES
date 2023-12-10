export function up(knex) {
    return knex.schema.createTable("Jenis Pengiriman", (table) => {
        table.string("ID_Jenis_Pengiriman", 50).primary();
        table.string("Jenis_Pengiriman", 20);
    })
}

export function down(knex) {
    return knex.schema.dropTable("Jenis Pengiriman");
}