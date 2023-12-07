import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Pengiriman').del().then(async () => {
        const Pengiriman = await Promise.all([...Array(20)].map(async () => {
            const ID_Alamat = await knex.select('ID_Alamat').from('Alamat')
            return {
                ID_Pengiriman: faker.string.uuid(),
                ID_Alamat: faker.helpers.arrayElement(ID_Alamat).ID_Alamat,
                Jenis_Pengiriman: faker.helpers.arrayElement(['Ambil Toko', 'Kirim']),
                Nomor_Resi: faker.helpers.replaceSymbolWithNumber('##########')
            }
        }))
        await knex('Pengiriman').insert(Pengiriman)
        console.log('seed Pengiriman success')
        return 
    })
}