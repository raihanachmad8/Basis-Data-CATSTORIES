import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Pembeli').del().then(async () => {
        const Pembeli = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Pembeli: faker.string.uuid(),
                Nama: faker.person.firstName(),
                Email: faker.internet.email(),
                No_Telp: faker.helpers.replaceSymbolWithNumber('8##########'),
                Alamat: faker.location.streetAddress(),
            }
        }))
        await knex('Pembeli').insert(Pembeli)
        console.log('seed Pembeli success')
        return 
    })
}