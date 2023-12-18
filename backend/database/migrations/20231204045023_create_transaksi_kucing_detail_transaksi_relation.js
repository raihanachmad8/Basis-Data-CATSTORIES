export function up(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        table.foreign('ID_Transaksi').references('ID_Transaksi').inTable('Transaksi').onDelete('CASCADE').onUpdate('CASCADE')
        table.foreign('ID_Kucing').references('ID_Kucing').inTable('Kucing').onDelete('SET NULL').onUpdate('CASCADE')
    })
}

export function down(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        table.dropForeign('ID_Transaksi');
        table.dropForeign('ID_Kucing');
    })
}