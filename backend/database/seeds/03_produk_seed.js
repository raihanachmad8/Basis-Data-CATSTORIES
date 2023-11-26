import { faker } from '@faker-js/faker';
export async function seed(knex) {
    return knex('produk').del().then(async () => {
        const pemasokId = await knex.select('IDPemasok').from('pemasok');
        const produk = await Promise.all([...Array(10)].map(async () => {
            return {
                IDProduk: faker.string.uuid(),
                NamaProduk: faker.commerce.productName(),
                Deskripsi: faker.commerce.productDescription(),
                Harga: faker.commerce.price(),
                JumlahStok: faker.number.int({ min: 1, max: 100 }),
                IDPemasok: faker.helpers.arrayElement(pemasokId).IDPemasok,
            };
        }));
        console.log('seed produk');
        return knex('produk').insert(produk);
    })
}