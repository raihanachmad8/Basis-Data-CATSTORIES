export function up(knex) {
    return knex.schema.table("Kucing", (table) => {
        table.foreign("ID_Jenis").references("ID_Jenis").inTable("Jenis");
    })
}

export function down(knex) {
    return knex.schema.table("Kucing", (table) => {
        table.dropForeign("ID_Jenis");
    })
}