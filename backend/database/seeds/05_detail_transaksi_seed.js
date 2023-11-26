import { faker } from "@faker-js/faker";

export async function seed(knex) {
    return await knex('detail_transaksi').del().then(async () => {
        const detail_transaksi = await Promise.all([...Array(10)].map(async () => {
            const produk = await knex.select('IDProduk', 'Harga', 'JumlahStok').from('produk');
            const transaksi_penjualanId = await knex.select('IDTransaksi').from('transaksi_penjualan');
            const Jumlah = await faker.number.int({ min: 1, max: await faker.helpers.arrayElement(produk).JumlahStok })
            const Harga = await faker.helpers.arrayElement(produk).Harga * Jumlah
            return {
                IDDetailTransaksi: faker.string.uuid(),
                IDTransaksi: faker.helpers.arrayElement(transaksi_penjualanId).IDTransaksi,
                IDProduk: faker.helpers.arrayElement(produk).IDProduk,
                Jumlah: Jumlah,
                HargaSatuan: Harga,
            }
        }))
        console.log('seed detail_transaksi')
        return knex('detail_transaksi').insert(detail_transaksi)
    })
}