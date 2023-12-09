import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Detail_Transaksi').del().then(async () => {
        const Detail_Transaksi = await Promise.all([...Array(30)].map(async () => {
            const ID_Transaksi = await knex.select('ID_Transaksi').from('Transaksi')
            const ID_Kucing = await knex.select('ID_Kucing').from('Kucing')
            return {
                ID_Detail_Transaksi: faker.string.uuid(),
                ID_Transaksi: faker.helpers.arrayElement(ID_Transaksi).ID_Transaksi,
                ID_Kucing: faker.helpers.arrayElement(ID_Kucing).ID_Kucing,
            }
        }))
        await knex('Detail_Transaksi').insert(Detail_Transaksi)
        console.log('seed Detail_Transaksi success')
        return 
    })
}