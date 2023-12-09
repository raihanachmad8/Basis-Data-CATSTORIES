import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Kucing').del().then(async () => {
        const ID_Jenis = await knex.select('ID_Jenis').from('Jenis')
        const Kucing = await Promise.all([...Array(20)].map(async () => {
            return {
                ID_Kucing: faker.string.uuid(),
                ID_Jenis: faker.helpers.arrayElement(ID_Jenis).ID_Jenis,
                Nama_Kucing: faker.animal.cat(),
                Foto: faker.image.url(),
                Umur: faker.number.int({ min: 1, max: 10 }),
                Jenis_Kelamin: faker.helpers.arrayElement(['Jantan', 'Betina']),
                Tanggal_Masuk: faker.date.past(),
                Biaya: faker.number.float({ min: 0, max: 1000000, precision: 2}),
                Status: faker.helpers.arrayElement(['Tersedia', 'Tidak Tersedia']),
                Keterangan: faker.lorem.sentence()
            }
        }))
        await knex('Kucing').insert(Kucing)
        console.log('seed Kucing success')
        return 
    })
}