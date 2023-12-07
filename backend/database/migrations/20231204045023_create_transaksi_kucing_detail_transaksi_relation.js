export function up(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        table.foreign('ID_Transaksi').references('ID_Transaksi').inTable('Transaksi');
        table.foreign('ID_Kucing').references('ID_Kucing').inTable('Kucing');
    })
}

export function down(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        table.dropForeign('ID_Transaksi');
        table.dropForeign('ID_Kucing');
    })
}