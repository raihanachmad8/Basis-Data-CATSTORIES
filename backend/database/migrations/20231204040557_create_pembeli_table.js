export function up(knex) {
    return knex.schema.createTable("Pembeli", (table) => {
        table.string("ID_Pembeli", 50).primary();
        table.string("Nama_Pembeli", 100).notNullable();
        table.text("Email").notNullable();
        table.string("No_Telp", 15).notNullable();
        table.text("Alamat").notNullable();
    })
    .raw(`
    CREATE PROCEDURE TambahPembeli
        @ID_Pembeli VARCHAR(50),
        @Nama_Pembeli VARCHAR(100),
        @Email NVARCHAR(255),
        @No_Telp VARCHAR(15),
        @Alamat TEXT
    AS
    BEGIN
        INSERT INTO Pembeli (ID_Pembeli, Nama_Pembeli, Email, No_Telp, Alamat) VALUES
        (@ID_Pembeli, @Nama_Pembeli, @Email, @No_Telp, @Alamat);
    END;
    `)
    .raw(`
    CREATE PROCEDURE UpdatePembeli
        @ID_Pembeli VARCHAR(50),
        @Nama_Pembeli VARCHAR(100),
        @Email NVARCHAR(255),
        @No_Telp VARCHAR(15),
        @Alamat TEXT
    AS
    BEGIN
        UPDATE Pembeli
        SET 
            Nama_Pembeli = @Nama_Pembeli,
            Email = @Email,
            No_Telp = @No_Telp,
            Alamat = @Alamat
        WHERE ID_Pembeli = @ID_Pembeli;
    END;
    `)
    .raw(`
    CREATE PROCEDURE HapusPembeli
        @ID_Pembeli VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Pembeli WHERE ID_Pembeli = @ID_Pembeli;
    END;
    `)
}

export function down(knex) {
    return knex.schema
    .dropTable("Pembeli")
    .raw('DROP PROCEDURE IF EXISTS TambahPembeli')
    .raw('DROP PROCEDURE IF EXISTS UpdatePembeli')
    .raw('DROP PROCEDURE IF EXISTS HapusPembeli')
}
