import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Pembayaran').del().then(async () => {
        const Pembayaran = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Pembayaran: faker.string.uuid(),
                Metode_Pembayaran: faker.helpers.arrayElement(["Transfer", "Cash"]),
                Total_Biaya: faker.number.float({ min: 0, max: 1000000, precision: 2 }),
            }
        }))
        await knex('Pembayaran').insert(Pembayaran)
        console.log('seed Pembayaran success')
        return 
    })
}