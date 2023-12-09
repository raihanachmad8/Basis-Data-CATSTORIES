import {faker} from '@faker-js/faker'

export async function seed(knex) {
    await knex('Kucing').del()
    await knex('Transaksi').del()
    return await knex('Jenis').del().then(async () => {
        const Jenis = await Promise.all([
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Persia' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Maine Coon' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Siamese' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Sphynx' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Bengal' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Ragdoll' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Scottish Fold' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'British Shorthair' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Abyssinian' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Russian Blue' },
            { ID_Jenis: faker.string.uuid(), Jenis_Kucing: 'Anggora' }
        ])
        await knex('Jenis').insert(Jenis)
        console.log('seed Jenis Kucing  success')
        return 
    })
}