export function up(knex) {
    return knex.schema.createTable("Kucing", (table) => {
        table.string("ID_Kucing", 50).primary();
        table.string("ID_Jenis", 50)
        table.string("Nama_Kucing", 50).notNullable();
        table.string("Foto", 100).notNullable();
        table.smallint("Umur").notNullable();
        table.string("Jenis_Kelamin", 6).notNullable().checkIn(["Jantan", "Betina"]);
        table.date("Tanggal_Masuk").notNullable();
        table.decimal("Biaya").notNullable();
        table.string("Status", 20).notNullable().checkIn(["Tersedia", "Tidak Tersedia"]);
        table.text("Keterangan");
    })
    .raw(`
    CREATE PROCEDURE TambahKucing
        @ID_Kucing VARCHAR(50),
        @ID_Jenis VARCHAR(50),
        @Nama_Kucing VARCHAR(50),
        @Foto VARCHAR(100),
        @Umur SMALLINT,
        @Jenis_Kelamin VARCHAR(6),
        @Tanggal_Masuk DATE,
        @Biaya DECIMAL,
        @Status VARCHAR(20),
        @Keterangan TEXT
    AS
    BEGIN
        INSERT INTO Kucing (ID_Kucing, ID_Jenis, Nama_Kucing, Foto, Umur, Jenis_Kelamin, Tanggal_Masuk, Biaya, Status, Keterangan) VALUES
        (@ID_Kucing, @ID_Jenis, @Nama_Kucing, @Foto, @Umur, @Jenis_Kelamin, @Tanggal_Masuk, @Biaya, @Status, @Keterangan);
    END;
    `)
    .raw(`
    CREATE PROCEDURE UpdateKucing
        @ID_Kucing VARCHAR(50),
        @ID_Jenis VARCHAR(50),
        @Nama_Kucing VARCHAR(50),
        @Foto VARCHAR(100),
        @Umur SMALLINT,
        @Jenis_Kelamin VARCHAR(6),
        @Tanggal_Masuk DATE,
        @Biaya DECIMAL,
        @Status VARCHAR(20),
        @Keterangan TEXT
    AS
    BEGIN
        UPDATE Kucing
        SET 
            ID_Jenis = @ID_Jenis,
            Nama_Kucing = @Nama_Kucing,
            Foto = @Foto,
            Umur = @Umur,
            Jenis_Kelamin = @Jenis_Kelamin,
            Tanggal_Masuk = @Tanggal_Masuk,
            Biaya = @Biaya,
            Status = @Status,
            Keterangan = @Keterangan
        WHERE ID_Kucing = @ID_Kucing;
    END;
    `)
    .raw(`
    CREATE PROCEDURE HapusKucing
        @ID_Kucing VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Kucing WHERE ID_Kucing = @ID_Kucing;
    END;
    `)
    .raw(`
    CREATE FUNCTION TampilKucing ()
    RETURNS TABLE
    AS 
    RETURN
    (
        SELECT
            *
        FROM Kucing
    );
    `)
    .raw(`
    CREATE FUNCTION TampilKucingById (@ID_Kucing VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN
    (
        SELECT
            *
        FROM Kucing
        WHERE ID_Kucing = @ID_Kucing
    );
    `)
    .raw(`
    CREATE FUNCTION CariKucing(@key VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN(
        SELECT 
            K.ID_Kucing, K.Nama_Kucing, K.Jenis_Kelamin, K.ID_Jenis, J.Jenis_Kucing, K.Umur, K.Status, K.Tanggal_Masuk
        FROM Kucing K
        JOIN Jenis J ON J.ID_Jenis = K.ID_Jenis
        WHERE K.Nama_Kucing LIKE '%' + @key + '%'
        OR K.ID_Kucing LIKE '%' + @key + '%'
        OR K.Umur LIKE '%' + @key + '%'
        OR J.Jenis_Kucing LIKE '%' + @key + '%'
        OR K.Jenis_Kelamin LIKE '%' + @key + '%'
        OR K.Biaya LIKE '%' + @key + '%'
        OR CAST(K.Tanggal_Masuk AS VARCHAR(50)) LIKE '%' + @key + '%'
    );
    `)

}

export function down(knex) {
    return knex.schema
    .dropTable("Kucing")
    .raw('DROP PROCEDURE IF EXISTS TambahKucing')
    .raw('DROP PROCEDURE IF EXISTS UpdateKucing')
    .raw('DROP PROCEDURE IF EXISTS HapusKucing')
    .raw('DROP FUNCTION IF EXISTS TampilKucing')
    .raw('DROP FUNCTION IF EXISTS TampilKucingById')
    .raw('DROP FUNCTION IF EXISTS CariKucing')
}
