import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Metode_Pembayaran').del().then(async () => {
        const Pembayaran = await Promise.all([
                {ID_Metode_Pembayaran: 'MPB1', Metode_Pembayaran:'Cash'},
                {ID_Metode_Pembayaran: 'MPB2', Metode_Pembayaran:'Transfer Mandiri'},
                {ID_Metode_Pembayaran: 'MPB3', Metode_Pembayaran:'Transfer BRI'},
                {ID_Metode_Pembayaran: 'MPB4', Metode_Pembayaran:'Transfer BNI'},
                {ID_Metode_Pembayaran: 'MPB5', Metode_Pembayaran:'Transfer BCA'},
                {ID_Metode_Pembayaran: 'MPB6', Metode_Pembayaran:'OVO'},
                {ID_Metode_Pembayaran: 'MPB7', Metode_Pembayaran:'GoPay'},
        ])
        await knex('Metode_Pembayaran').insert(Pembayaran)
        return 
    })
}