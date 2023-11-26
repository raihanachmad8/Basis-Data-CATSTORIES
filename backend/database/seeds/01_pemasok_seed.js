import { faker } from '@faker-js/faker';

export async function seed(knex) {
    return await knex('pemasok').del().then(async () => {
        const pemasok = await Promise.all([...Array(10)].map(async () => {
            return {
                IDPemasok: faker.string.uuid(),
                NamaPemasok: faker.company.name(),
                Alamat: faker.location.streetAddress(),
                NomorTelepon: faker.phone.number(),
                Email: faker.internet.email(),
            };
        }));
        console.log('seed pemasok');
        return knex('pemasok').insert(pemasok);
    });
}