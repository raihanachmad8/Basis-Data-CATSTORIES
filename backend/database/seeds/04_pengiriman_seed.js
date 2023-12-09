import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Jenis Pengiriman').del().then(async () => {
        const Pengiriman = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Jenis_Pengiriman: faker.string.uuid(),
                Jenis_Pengiriman: faker.helpers.arrayElement(['Ambil Toko', 'Kirim', 'COD']),
            }
        }))
        await knex('Jenis Pengiriman').insert(Pengiriman)
        console.log('seed Pengiriman success')
        return 
    })
}