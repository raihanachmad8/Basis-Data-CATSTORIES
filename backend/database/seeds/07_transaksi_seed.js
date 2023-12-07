import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Transaksi').del().then(async () => {
        const ID_Pembeli = await knex.select('ID_Pembeli').from('Pembeli')
        const ID_Pengiriman = await knex.select('ID_Pengiriman').from('Pengiriman')
        const ID_Pembayaran = await knex.select('ID_Pembayaran').from('Pembayaran')
        const Transaksi = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Transaksi: faker.string.uuid(),
                ID_Pembeli: faker.helpers.arrayElement(ID_Pembeli).ID_Pembeli,
                ID_Pengiriman: faker.helpers.arrayElement(ID_Pengiriman).ID_Pengiriman,
                ID_Pembayaran: faker.helpers.arrayElement(ID_Pembayaran).ID_Pembayaran,
                Tanggal_Transaksi: faker.date.past(),
                Pesan: faker.lorem.sentence(),
            }
        }))
        await knex('Transaksi').insert(Transaksi)
        console.log('seed Transaksi success')
        return 
    })
}