export function up(knex) {
    return knex.schema.createTable("Metode_Pembayaran", (table) => {
        table.string("ID_Metode_Pembayaran", 50).primary();
        table.string("Metode_Pembayaran", 20).notNullable()
    })
    .raw(`
    CREATE PROCEDURE TambahMetodePembayaran
        @ID_Metode_Pembayaran VARCHAR(50),
        @Metode_Pembayaran VARCHAR(20)
    AS
    BEGIN
        INSERT INTO Metode_Pembayaran (ID_Metode_Pembayaran, Metode_Pembayaran)
        VALUES (@ID_Metode_Pembayaran, @Metode_Pembayaran);
    END;
    `)
    .raw(`
    CREATE PROCEDURE UpdateMetodePembayaran
        @ID_Metode_Pembayaran VARCHAR(50),
        @Metode_Pembayaran VARCHAR(20)
    AS
    BEGIN
        UPDATE Metode_Pembayaran
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
        DELETE FROM Metode_Pembayaran
        WHERE ID_Metode_Pembayaran = @ID_Metode_Pembayaran;
    END;
    `)
    .raw(`
    CREATE FUNCTION CariMetodePembayaran(@key VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Metode_Pembayaran
        WHERE ID_Metode_Pembayaran LIKE '%' + @key + '%'
        OR Metode_Pembayaran LIKE '%' + @key + '%'
    );
    `)
    .raw(`
    CREATE FUNCTION TampilMetodePembayaran()
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Metode_Pembayaran
    );
    `)
    .raw(`
    CREATE FUNCTION TampilMetodePembayaranByID(@ID_Metode_Pembayaran VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Metode_Pembayaran
        WHERE ID_Metode_Pembayaran = @ID_Metode_Pembayaran
    );
    `)
    .raw(`
    CREATE FUNCTION TampilMetodePembayaranByName(@Metode_Pembayaran VARCHAR(20))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Metode_Pembayaran
        WHERE Metode_Pembayaran = @Metode_Pembayaran
    );
    `)


}

export function down(knex) {
    return knex.schema
    .dropTable("Metode_Pembayaran")
    .raw('DROP PROCEDURE IF EXISTS TambahMetodePembayaran')
    .raw('DROP PROCEDURE IF EXISTS UpdateMetodePembayaran')
    .raw('DROP PROCEDURE IF EXISTS HapusMetodePembayaran')
    .raw('DROP FUNCTION IF EXISTS CariMetodePembayaran')
    .raw('DROP FUNCTION IF EXISTS TampilMetodePembayaran')
    .raw('DROP FUNCTION IF EXISTS TampilMetodePembayaranByID')
    .raw('DROP FUNCTION IF EXISTS TampilMetodePembayaranByName')
}
