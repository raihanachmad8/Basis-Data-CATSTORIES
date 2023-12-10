import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Pembeli').del().then(async () => {
        const Pembeli = await Promise.all([
                {ID_Pembeli:'P1', Nama_Pembeli: 'John Doe', Email: 'john.doe@email.com', No_Telp:'123456789', Alamat: '123 Main St, City A, Province A, 12345'},
                {ID_Pembeli:'P2', Nama_Pembeli: 'Jane Smith', Email: 'jane.smith@email.com', No_Telp:'987654321', Alamat: '456 Oak St, City B, Province B, 67890'},
                {ID_Pembeli:'P3', Nama_Pembeli: 'Bob Johnson', Email: 'bob.johnson@email.com', No_Telp:'555111222', Alamat: '789 Maple St, City C, Province C, 10111'},
                {ID_Pembeli:'P4', Nama_Pembeli: 'Alice Williams', Email: 'alice.williams@email.com', No_Telp:'111222333', Alamat: '321 Pine St, City D, Province D, 22233'},
                {ID_Pembeli:'P5', Nama_Pembeli: 'Charlie Brown', Email: 'charlie.brown@email.com', No_Telp:'444555666', Alamat: '654 Elm St, City E, Province E, 44455'},
                {ID_Pembeli:'P6', Nama_Pembeli: 'Vunky Himawan', Email: 'pungbei@email.com', No_Telp:'444559266', Alamat: '78 Elma St, City E, Province E, 44415'}
        ])
        await knex('Pembeli').insert(Pembeli)
        console.log('seed Pembeli success')
        return 
    })
}