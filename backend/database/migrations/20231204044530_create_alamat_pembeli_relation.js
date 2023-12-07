export function up(knex) {
    return knex.schema.table("Pembeli", (table) => {
        table.foreign("ID_Alamat").references("ID_Alamat").inTable("Alamat");
    })
}

export function down(knex) {
    return knex.schema.table("Pembeli", (table) => {
        table.dropForeign("ID_Alamat");
    })
}