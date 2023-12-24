import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Pembeli').del().then(async () => {
        const Pembeli = await Promise.all([
            { ID_Pembeli: 'P1', Nama_Pembeli: 'John Doe', Email: 'john.doe@email.com', No_Telp: '1234567891', Alamat: '123 Main St, City A, Province A, 12345' },
            { ID_Pembeli: 'P2', Nama_Pembeli: 'Jane Smith', Email: 'jane.smith@email.com', No_Telp: '1987654321', Alamat: '456 Oak St, City B, Province B, 67890' }
        ])
        await knex('Pembeli').insert(Pembeli)
        return
    })
}