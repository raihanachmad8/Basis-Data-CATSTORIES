import {faker} from '@faker-js/faker'

export async function seed(knex) {
    await knex('Kucing').del()
    await knex('Transaksi').del()
    return await knex('Jenis').del().then(async () => {
        const Jenis = await Promise.all([
            { ID_Jenis: 'J1', Jenis_Kucing: 'Persia' },
            { ID_Jenis: 'J2', Jenis_Kucing: 'Maine Coon' },
            { ID_Jenis: 'J3', Jenis_Kucing: 'Siamese' },
            { ID_Jenis: 'J4', Jenis_Kucing: 'Sphynx' },
            { ID_Jenis: 'J5', Jenis_Kucing: 'Bengal' },
            { ID_Jenis: 'J6', Jenis_Kucing: 'Ragdoll' },
            { ID_Jenis: 'J7', Jenis_Kucing: 'Scottish Fold' },
            { ID_Jenis: 'J8', Jenis_Kucing: 'British Shorthair' },
            { ID_Jenis: 'J9', Jenis_Kucing: 'Abyssinian' },
            { ID_Jenis: 'J10', Jenis_Kucing: 'Russian Blue' }
        ])
        await knex('Jenis').insert(Jenis)
        return 
    })
}