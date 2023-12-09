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
    });
}

export function down(knex) {
    return knex.schema.dropTable("Kucing");
}
