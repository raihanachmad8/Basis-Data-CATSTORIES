import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Jenis Pengiriman').del().then(async () => {
        const Pengiriman = await Promise.all([
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "COD"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "Ambil Toko"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "JNE"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "JNT Express"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "JNT"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "Cargo"},
            {ID_Jenis_Pengiriman: faker.string.uuid(), Jenis_Pengiriman: "Lion Parcel"},
        ])
        await knex('Jenis Pengiriman').insert(Pengiriman)
        console.log('seed Pengiriman success')
        return 
    })
}