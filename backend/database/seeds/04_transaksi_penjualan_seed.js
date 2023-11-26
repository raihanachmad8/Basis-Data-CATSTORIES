import { faker } from "@faker-js/faker";

export async function seed(knex) {
    return await knex('transaksi_penjualan').del().then(async () => {
        const transaksi_penjualan = await Promise.all([...Array(10)].map(async () => {
            const pelangganId = await knex.select('IDPelanggan').from('pelanggan');
            return {
                IDTransaksi: faker.string.uuid(),
                TanggalTransaksi: faker.date.past(),
                TotalHarga: faker.commerce.price(),
                IDPelanggan: faker.helpers.arrayElement(pelangganId).IDPelanggan,
            }
        }))
        console.log('seed transaksi_penjualan')
        return knex('transaksi_penjualan').insert(transaksi_penjualan)
    })
}