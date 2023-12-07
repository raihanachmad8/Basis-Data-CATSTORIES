export function up(knex) {
    return knex.schema.createTable("Pembayaran", (table) => {
        table.string("ID_Pembayaran", 50).primary();
        table.string("Metode_Pembayaran", 10).notNullable().checkIn(["Transfer", "Cash"]);
        table.decimal("Total_Biaya").notNullable();
    });
}

export function down(knex) {
    return knex.schema.dropTable("Pembayaran");
}
