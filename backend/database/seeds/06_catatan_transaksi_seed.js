import { faker } from '@faker-js/faker';

export async function seed(knex) {
    return await knex('catatan_transaksi').del().then(async () => {
        const catatan_transaksi = await Promise.all([...Array(10)].map(async () => {
            const transaksi_penjualanId = await knex.select('IDTransaksi').from('transaksi_penjualan');
            const table = faker.helpers.arrayElement(['transaksi_penjualan', 'produk']);
            const column = (table == 'produk') ? 'IDProduk' : 'IDTransaksi';
            const idRekaman = faker.helpers.arrayElement(await knex.select(column).from(table))[column];
            return {
                IDCatatanTransaksi: faker.string.uuid(),
                IDTransaksi: faker.helpers.arrayElement(transaksi_penjualanId)['IDTransaksi'],
                Tindakan: faker.helpers.arrayElement(['Tambah', 'Perbarui', 'Hapus']),
                TabelSasaran: table,
                IDRekamanSasaran: idRekaman,
            };
        }));
        console.log('seed catatan_transaksi');
        return knex('catatan_transaksi').insert(catatan_transaksi);
    });
}
