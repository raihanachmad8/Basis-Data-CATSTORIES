import {faker} from '@faker-js/faker'

export async function seed(knex) {
    await knex('Kucing').del()
    await knex('Transaksi').del()
    return await knex('Jenis').del().then(async () => {
        const Jenis = await Promise.all([
            { ID_Jenis: faker.string.uuid(), Nama: 'Persia' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Maine Coon' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Siamese' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Sphynx' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Bengal' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Ragdoll' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Scottish Fold' },
            { ID_Jenis: faker.string.uuid(), Nama: 'British Shorthair' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Abyssinian' },
            { ID_Jenis: faker.string.uuid(), Nama: 'Russian Blue' }
        ])
        await knex('Jenis').insert(Jenis)
        console.log('seed Jenis Kucing  success')
        return 
    })
}