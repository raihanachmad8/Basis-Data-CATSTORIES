export function up(knex) {
    return knex.schema
        .createTable("Transaksi", (table) => {
            table.string("ID_Transaksi", 50).primary()
            table.string("ID_Pembeli", 50)
            table.string("ID_Jenis_Pengiriman", 50)
            table.string("ID_Metode_Pembayaran", 50)
            table.decimal("Total_Biaya").notNullable()
            table.string("Nomor_Resi", 30)
            table.date('Tanggal_Transaksi').notNullable()
            table.text("Pesan")
        })
        .raw(`
    CREATE PROCEDURE tambahTransaksi
        @ID_Transaksi VARCHAR(50),
        @ID_Pembeli VARCHAR(50),
        @ID_Jenis_Pengiriman VARCHAR(50),
        @ID_Metode_Pembayaran VARCHAR(50),
        @Total_Biaya DECIMAL,
        @Nomor_Resi VARCHAR(30) NULL,
        @Tanggal_Transaksi DATE,
        @Pesan TEXT
    AS
    BEGIN
        INSERT INTO Transaksi (ID_Transaksi, ID_Pembeli, ID_Jenis_Pengiriman, ID_Metode_Pembayaran, Total_Biaya, Nomor_Resi, Tanggal_Transaksi, Pesan)
        VALUES (@ID_Transaksi, @ID_Pembeli, @ID_Jenis_Pengiriman, @ID_Metode_Pembayaran, @Total_Biaya, @Nomor_Resi, @Tanggal_Transaksi, @Pesan);
    END;
    `)
        .raw(`
    CREATE PROCEDURE updateTransaksi
        @ID_Transaksi VARCHAR(50),
        @ID_Pembeli VARCHAR(50),
        @ID_Jenis_Pengiriman VARCHAR(50),
        @ID_Metode_Pembayaran VARCHAR(50),
        @Total_Biaya DECIMAL,
        @Nomor_Resi VARCHAR(30),
        @Tanggal_Transaksi DATE,
        @Pesan TEXT
    AS
    BEGIN
    UPDATE Transaksi
    SET
        ID_Pembeli = @ID_Pembeli,
        ID_Jenis_Pengiriman = @ID_Jenis_Pengiriman,
        ID_Metode_Pembayaran = @ID_Metode_Pembayaran,
        Total_Biaya = @Total_Biaya,
        Nomor_Resi = @Nomor_Resi,
        Tanggal_Transaksi = @Tanggal_Transaksi,
        Pesan = @Pesan
    WHERE ID_Transaksi = @ID_Transaksi;
    END;
    `)
        .raw(`
    CREATE PROCEDURE HapusTransaksi
        @ID_Transaksi VARCHAR(50)
    AS
    BEGIN
        DELETE FROM Transaksi  WHERE ID_Transaksi = @ID_Transaksi;
        DELETE FROM Detail_Transaksi WHERE ID_Transaksi = @ID_Transaksi;
    END;
    `)
        .raw(`
        CREATE FUNCTION CariTransaksi(@key VARCHAR(50))
        RETURNS TABLE
        AS
        RETURN (
            SELECT 
                T.*
            FROM Transaksi T
            JOIN Pembeli P ON P.ID_Pembeli = T.ID_Pembeli
            JOIN Jenis_Pengiriman JP ON JP.ID_Jenis_Pengiriman = T.ID_Jenis_Pengiriman
            JOIN Metode_Pembayaran MP ON MP.ID_Metode_Pembayaran = T.ID_Metode_Pembayaran
            WHERE 
                P.Nama_Pembeli LIKE '%' + @key + '%'
                OR JP.Jenis_Pengiriman LIKE '%' + @key + '%'
                OR MP.Metode_Pembayaran LIKE '%' + @key + '%'
                OR CAST(T.Total_Biaya AS VARCHAR(50)) LIKE '%' + @key + '%'
                OR CAST(T.ID_Transaksi AS VARCHAR(50)) LIKE '%' + @key + '%'
                OR T.Nomor_Resi LIKE '%' + @key + '%'
                OR CAST(T.Tanggal_Transaksi AS VARCHAR(50)) LIKE '%' + @key + '%'
        );
        
    `)
        .raw(`
    CREATE FUNCTION TampilTransaksi()
    RETURNS TABLE
    AS
    RETURN (
        SELECT
            *
        FROM
            Transaksi
    );
    `)
        .raw(`
    CREATE FUNCTION TampilTransaksiById(@ID_Transaksi VARCHAR(50))
    RETURNS TABLE
    AS
    RETURN (
        SELECT
            *
        FROM
            Transaksi
        WHERE
            ID_Transaksi = @ID_Transaksi
    );
    `)
        .raw(`
    CREATE FUNCTION JumlahTransaksiPivot()
    RETURNS TABLE
    AS
    RETURN (
        SELECT TOP 10
            Tahun,
            COALESCE([1], 0) as Januari, 
            COALESCE([2], 0) as Februari, 
            COALESCE([3], 0) as Maret, 
            COALESCE([4], 0) as April, 
            COALESCE([5], 0) as Mei, 
            COALESCE([6], 0) as Juni, 
            COALESCE([7], 0) as Juli, 
            COALESCE([8], 0) as Agustus, 
            COALESCE([9], 0) as September, 
            COALESCE([10], 0) as Oktober, 
            COALESCE([11], 0) as November, 
            COALESCE([12], 0) as Desember
        FROM (
            SELECT
                YEAR(Tanggal_Transaksi) AS Tahun,
                MONTH(Tanggal_Transaksi) AS Bulan,
                COUNT(ID_Transaksi) AS Jumlah_Transaksi
            FROM
                Transaksi
            GROUP BY
                YEAR(Tanggal_Transaksi),
                MONTH(Tanggal_Transaksi)
        ) AS PivotTransaksi
        PIVOT (
            SUM(Jumlah_Transaksi)
            FOR Bulan IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12])
        ) AS PivotBulan
        ORDER BY Tahun
    );
    `)
}

export function down(knex) {
    return knex.schema
        .dropTable("Transaksi")
        .raw('DROP PROCEDURE IF EXISTS tambahTransaksi')
        .raw('DROP PROCEDURE IF EXISTS updateTransaksi')
        .raw('DROP PROCEDURE IF EXISTS HapusTransaksi')
        .raw('DROP FUNCTION IF EXISTS CariTransaksi')
        .raw('DROP FUNCTION IF EXISTS TampilTransaksi')
        .raw('DROP FUNCTION IF EXISTS TampilTransaksiById')
        .raw('DROP FUNCTION IF EXISTS JumlahTransaksiPivot')
}