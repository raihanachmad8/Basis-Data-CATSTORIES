import { faker } from "@faker-js/faker"

export async function seed(knex) {
    await knex('Pengiriman').del();
    await knex('Pembeli').del();
    return await knex('Alamat').del().then(async () => {
        const Alamat = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Alamat: faker.string.uuid(),
                Jalan: faker.location.streetAddress(),
                Kota: faker.location.city(),
                Provinsi: faker.location.state(),
                Kode_Pos: faker.location.zipCode().substring(0, 5)
            }
        }))
        await knex('Alamat').insert(Alamat)
        console.log('seed Alamat success')
        return 
    })
}