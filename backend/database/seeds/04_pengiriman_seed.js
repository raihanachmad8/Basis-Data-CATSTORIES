import { faker } from "@faker-js/faker"

export async function seed(knex) {
    return await knex('Jenis_Pengiriman').del().then(async () => {
        const Pengiriman = await Promise.all([
            {ID_Jenis_Pengiriman:'JP1', Jenis_Pengiriman: 'Ambil Toko'},
            {ID_Jenis_Pengiriman:'JP2', Jenis_Pengiriman: 'Kirim JNT'},
            {ID_Jenis_Pengiriman:'JP3', Jenis_Pengiriman: 'Kirim JNE'},
            {ID_Jenis_Pengiriman:'JP4', Jenis_Pengiriman: 'Kirim GrabExpress'},
            {ID_Jenis_Pengiriman:'JP5', Jenis_Pengiriman: 'Kirim GoSend'},
            {ID_Jenis_Pengiriman:'JP6', Jenis_Pengiriman: 'COD'},
        ])
        await knex('Jenis_Pengiriman').insert(Pengiriman)
        return 
    })
}