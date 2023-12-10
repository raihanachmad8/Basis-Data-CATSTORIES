import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Metode Pembayaran').del().then(async () => {
        const Pembayaran = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Metode_Pembayaran: faker.string.uuid(),
                Metode_Pembayaran: faker.helpers.arrayElement(["Transfer", "Cash"]),
            }
        }))
        await knex('Metode Pembayaran').insert(Pembayaran)
        console.log('seed Pembayaran success')
        return 
    })
}