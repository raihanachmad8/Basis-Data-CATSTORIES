import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Transaksi').del().then(async () => {
        const ID_Pembeli = await knex.select('ID_Pembeli').from('Pembeli')
        const ID_Jenis_Pengiriman = await knex.select('ID_Jenis_Pengiriman').from('Jenis Pengiriman')
        const ID_Metode_Pembayaran = await knex.select('ID_Metode_Pembayaran').from('Metode Pembayaran')
        const Transaksi = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Transaksi: faker.string.uuid(),
                ID_Pembeli: faker.helpers.arrayElement(ID_Pembeli).ID_Pembeli,
                ID_Jenis_Pengiriman: faker.helpers.arrayElement(ID_Jenis_Pengiriman).ID_Jenis_Pengiriman,
                ID_Metode_Pembayaran: faker.helpers.arrayElement(ID_Metode_Pembayaran).ID_Metode_Pembayaran,
                Tanggal_Transaksi: faker.date.past(),
                Pesan: faker.lorem.sentence(),
            }
        }))
        await knex('Transaksi').insert(Transaksi)
        console.log('seed Transaksi success')
        return 
    })
}