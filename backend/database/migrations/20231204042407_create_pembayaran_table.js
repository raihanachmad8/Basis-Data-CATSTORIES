export function up(knex) {
    return knex.schema.createTable("Metode Pembayaran", (table) => {
        table.string("ID_Metode_Pembayaran", 50).primary();
        table.string("Metode_Pembayaran", 20).notNullable()
    })
        .raw(`
    CREATE PROCEDURE TambahMetodePembayaran
        @ID_Metode_Pembayaran VARCHAR(50),
        @Metode_Pembayaran VARCHAR(20)
    AS
    BEGIN
        INSERT INTO [Metode Pembayaran] (ID_Metode_Pembayaran, Metode_Pembayaran)
        VALUES (@ID_Metode_Pembayaran, @Metode_Pembayaran);
    END;
    `)
        .raw(`
    CREATE PROCEDURE UpdateMetodePembayaran
        @ID_Metode_Pembayaran VARCHAR(50),
        @Metode_Pembayaran VARCHAR(20)
    AS
    BEGIN
        UPDATE [Metode Pembayaran]
        SET 
            Metode_Pembayaran = @Metode_Pembayaran
        WHERE ID_Metode_Pembayaran = @ID_Metode_Pembayaran;
    END;
    `)
        .raw(`
    CREATE PROCEDURE HapusMetodePembayaran
        @ID_Metode_Pembayaran VARCHAR(50)
    AS
    BEGIN
        DELETE FROM [Metode Pembayaran]
        WHERE ID_Metode_Pembayaran = @ID_Metode_Pembayaran;
    END;
    `)
}

export function down(knex) {
    return knex.schema
        .dropTable("Metode Pembayaran")
        .raw('DROP PROCEDURE IF EXISTS TambahMetodePembayaran')
        .raw('DROP PROCEDURE IF EXISTS UpdateMetodePembayaran')
        .raw('DROP PROCEDURE IF EXISTS HapusMetodePembayaran')
}
