import { faker } from "@faker-js/faker";

export async function seed(knex) {
    return await knex("Kucing")
        .del()
        .then(async () => {
            const ID_Jenis = await knex.select("ID_Jenis").from("Jenis");
            const Kucing = await Promise.all([
                {
                    ID_Kucing: "K1",
                    ID_Jenis: "J1",
                    Nama_Kucing: "Fluffy",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 2,
                    Jenis_Kelamin: "Jantan",
                    Tanggal_Masuk: "2023-01-01",
                    Biaya: 200000.0,
                    Status: "Tidak Tersedia",
                    Keterangan: "Deskripsi Fluufy",
                },
                {
                    ID_Kucing: "K2",
                    ID_Jenis: "J2",
                    Nama_Kucing: "Mittens",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 2,
                    Jenis_Kelamin: "Betina",
                    Tanggal_Masuk: "2023-02-01",
                    Biaya: 150000.0,
                    Status: "Tersedia",
                    Keterangan: "Deskripsi Mittens",
                },
                {
                    ID_Kucing: "K3",
                    ID_Jenis: "J2",
                    Nama_Kucing: "Whiskers",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 6,
                    Jenis_Kelamin: "Jantan",
                    Tanggal_Masuk: "2023-02-11",
                    Biaya: 150000.0,
                    Status: "Tidak Tersedia",
                    Keterangan: "Deskripsi Whiskers",
                },
                {
                    ID_Kucing: "K4",
                    ID_Jenis: "J2",
                    Nama_Kucing: "Leo",
                    Foto: "http://localhost:3000/storage/kucing/1702230916071-998995605-.jpg",
                    Umur: 6,
                    Jenis_Kelamin: "Jantan",
                    Tanggal_Masuk: "2023-03-01",
                    Biaya: 320000.0,
                    Status: "Tersedia",
                    Keterangan: "Deskripsi Leo",
                },
                {
                    ID_Kucing: "K5",
                    ID_Jenis: "J4",
                    Nama_Kucing: "Leo",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 12,
                    Jenis_Kelamin: "Jantan",
                    Tanggal_Masuk: "2023-03-01",
                    Biaya: 300000.0,
                    Status: "Tersedia",
                    Keterangan: "Deskripsi Leo",
                },
                {
                    ID_Kucing: "K6",
                    ID_Jenis: "J10",
                    Nama_Kucing: "Nala",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 12,
                    Jenis_Kelamin: "Jantan",
                    Tanggal_Masuk: "2023-03-01",
                    Biaya: 245000.0,
                    Status: "Tersedia",
                    Keterangan: "Deskripsi Nala",
                },
                {
                    ID_Kucing: "K7",
                    ID_Jenis: "J10",
                    Nama_Kucing: "Moi",
                    Foto: "http://localhost:3000/storage/kucing/1702092125730-96533786-kucing.jpg",
                    Umur: 12,
                    Jenis_Kelamin: "Betina",
                    Tanggal_Masuk: "2023-04-21",
                    Biaya: 370000.0,
                    Status: "Tersedia",
                    Keterangan: "Deskripsi Moi",
                },
            ]);
            await knex("Kucing").insert(Kucing);
            console.log("seed Kucing success");
            return;
        });
}
