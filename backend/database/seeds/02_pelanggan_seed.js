import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('pelanggan').del().then(async () => {
        const pelanggan = await Promise.all([...Array(10)].map(async () => {   
            return {
                IDPelanggan: faker.string.uuid(),
                NamaPelanggan: faker.person.fullName(),
                Alamat: faker.location.streetAddress(),
                NomorTelepon: faker.phone.number(),
                Email: faker.internet.email(),
            }
        }))
        console.log('seed pelanggan')
        return knex('pelanggan').insert(pelanggan)
    })
}