export function up(knex) {
    return knex.schema.createTable("Detail_Transaksi", (table) => {
        table.string("ID_Detail_Transaksi", 50).primary()
        table.string("ID_Transaksi", 50)
        table.string("ID_Kucing", 50)
    })        
}

export function down(knex) {
    return knex.schema.dropTable("Detail_Transaksi");
}