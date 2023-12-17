export function up(knex) {
    return knex.schema
    .createTable("Jenis", (table) => {
        table.string("ID_Jenis", 50).primary();
        table.string("Jenis_Kucing", 100).notNullable();
    })
    .raw(`
    CREATE PROCEDURE TambahJenis
        @ID_Jenis VARCHAR(50),
        @Jenis_Kucing VARCHAR(50)
    AS
    BEGIN
        INSERT INTO Jenis (ID_Jenis, Jenis_Kucing)
        VALUES (@ID_Jenis, @Jenis_Kucing);
    END;
    `)
    .raw(`
    CREATE PROCEDURE UpdateJenis
        @ID_Jenis VARCHAR(50),
        @Jenis_Kucing VARCHAR(50)
    AS
    BEGIN
        UPDATE Jenis
        SET 
            Jenis_Kucing = @Jenis_Kucing
        WHERE ID_Jenis = @ID_Jenis;
    END;
    `)
    .raw(`
    CREATE PROCEDURE HapusJenisKucing
        @ID_Jenis VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Jenis WHERE ID_Jenis = @ID_Jenis;
    END;
    `)
    .raw(`
    CREATE FUNCTION TampilJenisKucing ()
    RETURNS TABLE
    AS 
    RETURN
    (
        SELECT *
        FROM Jenis
    );
    `)
    .raw(`
    CREATE FUNCTION TampilJenisKucingById (@ID_Jenis VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN
    (
        SELECT *
        FROM Jenis
        WHERE ID_Jenis = @ID_Jenis
    );
    `)
    .raw(`
    CREATE FUNCTION CariJenisKucing(@key VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT
            *
        FROM Jenis
        WHERE ID_Jenis LIKE '%' + @key + '%'
            OR Jenis_Kucing LIKE '%' + @key + '%'
    );
    `)
}

export function down(knex) {
    return knex.schema
    .dropTable("Jenis")
    .raw('DROP PROCEDURE IF EXISTS TambahJenis')
    .raw('DROP PROCEDURE IF EXISTS UpdateJenis')
    .raw('DROP PROCEDURE IF EXISTS HapusJenisKucing')
    .raw('DROP FUNCTION IF EXISTS TampilJenisKucing')
    .raw('DROP FUNCTION IF EXISTS TampilJenisKucingById')
    .raw('DROP FUNCTION IF EXISTS CariJenisKucing')
}
