import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Detail_Transaksi').del().then(async () => {
        const Detail_Transaksi = await Promise.all([
            {ID_Detail_Transaksi: 'DT1', ID_Transaksi: 'T1', ID_Kucing: 'K3'},
            {ID_Detail_Transaksi: 'DT2', ID_Transaksi: 'T1', ID_Kucing: 'K2'},
            {ID_Detail_Transaksi: 'DT3', ID_Transaksi: 'T2', ID_Kucing: 'K1'},
            {ID_Detail_Transaksi: 'DT4', ID_Transaksi: 'T2', ID_Kucing: 'K5'},
        ])
        await knex('Detail_Transaksi').insert(Detail_Transaksi)
        return 
    })
}