import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Transaksi').del().then(async () => {
        const Transaksi = await Promise.all([
            {ID_Transaksi:'T1', ID_Pembeli: 'P1', ID_Jenis_Pengiriman: 'JP1', ID_Metode_Pembayaran: 'MPB1', Total_Biaya: 230000, Nomor_Resi: 'RESI123', Tanggal_Transaksi: '2023-01-15', Pesan: 'Pesan transaksi 1'},
            {ID_Transaksi:'T2', ID_Pembeli: 'P2', ID_Jenis_Pengiriman: 'JP2', ID_Metode_Pembayaran: 'MPB2', Total_Biaya: 300000, Nomor_Resi: 'RESI456', Tanggal_Transaksi: '2023-02-20', Pesan: 'Pesan transaksi 2'},
        ])
        await knex('Transaksi').insert(Transaksi)
        console.log('seed Transaksi success')
        return 
    })
}