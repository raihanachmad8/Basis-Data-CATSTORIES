export function up(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        // table.foreign('ID_Transaksi').references('ID_Transaksi').inTable('Transaksi')
        // table.foreign('ID_Kucing').references('ID_Kucing').inTable('Kucing')
        knex.raw(`
        ALTER TABLE Detail_Transaksi
        ADD CONSTRAINT FK_ID_Transaksi
        FOREIGN KEY (ID_Transaksi)
        REFERENCES Transaksi(ID_Transaksi)
        ON DELETE CASCADE
        ON UPDATE CASCADE
        `)
        knex.raw(`
        ALTER TABLE Detail_Transaksi
        ADD CONSTRAINT FK_ID_Kucing
        FOREIGN KEY (ID_Kucing)
        REFERENCES Kucing(ID_Kucing)
        ON DELETE CASCADE
        ON UPDATE CASCADE
        `)
    })
}

export function down(knex) {
    return knex.table('Detail_Transaksi', (table) => {
        table.dropForeign('ID_Transaksi');
        table.dropForeign('ID_Kucing');
    })
}