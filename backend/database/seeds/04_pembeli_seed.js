import { faker } from "@faker-js/faker"

export async function seed(knex) {
    const ID_Alamat = await knex.select('ID_Alamat').from('Alamat')
    return await knex('Pembeli').del().then(async () => {
        const Pembeli = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Alamat: faker.helpers.arrayElement(ID_Alamat).ID_Alamat,
                ID_Pembeli: faker.string.uuid(),
                Nama: faker.person.firstName(),
                Email: faker.internet.email(),
                No_Telp: faker.helpers.replaceSymbolWithNumber('8##########'),
            }
        }))
        await knex('Pembeli').insert(Pembeli)
        console.log('seed Pembeli success')
        return 
    })
}