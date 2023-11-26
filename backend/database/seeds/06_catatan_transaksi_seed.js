import {faker} from '@faker-js/faker';

export async function seed(knex) {
    return await knex('catatan_transaksi').del().then(async () => {
        const catatan_transaksi = await Promise.all([...Array(10)].map(async () => {
            const transaksi_penjualanId = await knex.select('IDTransaksi').from('transaksi_penjualan');
            const table = await faker.helpers.arrayElement(['transaksi_penjualan', 'produk']);
            const column = (table == 'produk') ? 'IDProduk': 'IDTransaksi'
            const idRekaman = await faker.helpers.arrayElement(await knex.select(column).from(table))[column];
            console.log(table + " : "+ idRekaman);
            return {
                IDCatatanTransaksi: faker.string.uuid(),
                IDTransaksi: faker.helpers.arrayElement(transaksi_penjualanId).IDTransaksi,
                Tindakan: faker.helpers.arrayElement(['Tambah', 'Perbarui', 'Hapus']),
                Tabel: table,
                IDRekamanSasaran: idRekaman,
                HargaSatuan: faker.commerce.price(),
            };
        }));
        console.log('seed catatan_transaksi');
        return knex('catatan_transaksi').insert(catatan_transaksi);
    });
}
