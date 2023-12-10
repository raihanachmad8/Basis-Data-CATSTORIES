export function up(knex) {
    return knex.schema.createTable("Metode Pembayaran", (table) => {
        table.string("ID_Metode_Pembayaran", 50).primary();
        table.string("Metode_Pembayaran", 20).notNullable()
    });
}

export function down(knex) {
    return knex.schema.dropTable("Metode Pembayaran");
}
