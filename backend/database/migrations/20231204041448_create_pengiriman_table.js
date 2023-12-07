export function up(knex) {
    return knex.schema.createTable("Pengiriman", (table) => {
        table.string("ID_Pengiriman", 50).primary();
        table.string("ID_Alamat", 50);
        table.string("Jenis_Pengiriman", 10).notNullable().checkIn(["Ambil Toko", "Kirim"]);
        table.string("Nomor_Resi", 50);
    })
}

export function down(knex) {
    return knex.schema.dropTable("Pengiriman");
}