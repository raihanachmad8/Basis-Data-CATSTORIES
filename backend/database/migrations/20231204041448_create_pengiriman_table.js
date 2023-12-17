export function up(knex) {
    return knex.schema.createTable("Jenis_Pengiriman", (table) => {
        table.string("ID_Jenis_Pengiriman", 50).primary();
        table.string("Jenis_Pengiriman", 20);
    })
    .raw(`
    CREATE PROCEDURE TambahJenisPengiriman
        @ID_Jenis_Pengiriman VARCHAR(50),
        @Jenis_Pengiriman VARCHAR(20)
    AS
    BEGIN
        INSERT INTO Jenis_Pengiriman (ID_Jenis_Pengiriman, Jenis_Pengiriman)
        VALUES (@ID_Jenis_Pengiriman, @Jenis_Pengiriman);
    END;
    `)
    .raw(`
    CREATE PROCEDURE UpdateJenisPengiriman
        @ID_Jenis_Pengiriman VARCHAR(50),
        @Jenis_Pengiriman VARCHAR(20)
    AS
    BEGIN
        UPDATE Jenis_Pengiriman
        SET 
            Jenis_Pengiriman = @Jenis_Pengiriman
        WHERE ID_Jenis_Pengiriman = @ID_Jenis_Pengiriman;
    END;
    `)
    .raw(`
    CREATE PROCEDURE HapusJenisPengiriman
        @ID_Jenis_Pengiriman VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Jenis_Pengiriman
        WHERE ID_Jenis_Pengiriman = @ID_Jenis_Pengiriman;
    END;
    `)
    .raw(`
    CREATE FUNCTION CariJenisPengiriman(@key VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Jenis_Pengiriman
        WHERE ID_Jenis_Pengiriman LIKE '%' + @key + '%'
        OR Jenis_Pengiriman LIKE '%' + @key + '%'
    );
    `)
    .raw(`
    CREATE FUNCTION TampilJenisPengiriman()
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Jenis_Pengiriman
    );
    `)
    .raw(`
    CREATE FUNCTION TampilJenisPengirimanByID(@ID_Jenis_Pengiriman VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Jenis_Pengiriman
        WHERE ID_Jenis_Pengiriman = @ID_Jenis_Pengiriman
    );
    `)
    .raw(`
    CREATE FUNCTION TampilJenisPengirimanByName(@Jenis_Pengiriman VARCHAR(20))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
        *
        FROM Jenis_Pengiriman
        WHERE Jenis_Pengiriman = @Jenis_Pengiriman
    );
    `)

}

export function down(knex) {
    return knex.schema
    .dropTable("Jenis_Pengiriman")
    .raw('DROP PROCEDURE IF EXISTS TambahJenisPengiriman')
    .raw('DROP PROCEDURE IF EXISTS UpdateJenisPengiriman')
    .raw('DROP PROCEDURE IF EXISTS HapusJenisPengiriman')
    .raw('DROP FUNCTION IF EXISTS CariJenisPengiriman')
    .raw('DROP FUNCTION IF EXISTS TampilJenisPengiriman')
    .raw('DROP FUNCTION IF EXISTS TampilJenisPengirimanByID')
    .raw('DROP FUNCTION IF EXISTS TampilJenisPengirimanByName')
}