import axios from 'axios'

export const getAllTransaksi = async (ref, search, sort, order, callback) => {
  await axios.get(`http://localhost:3000/api/v1/cat-stories/checkout/payment?search=${search}&sort=${sort}&orderBy=${order}`)
    .then(function (response) {
      callback(response.data.data)
      ref.current.classList.add('hidden')
    })
    .catch(function (error) {
      callback(error)
    })
}

export const createTransaksi = async (data, callback) => {
  const URL = 'http://localhost:3000/api/v1/cat-stories/checkout/payment/create'

  await axios.post(URL, {
    Pembeli: {
      Nama_Pembeli: capitalizeEachWord(data.get('Nama_Pembeli')),
      Alamat: data.get('Alamat'),
      No_Telp: data.get('No_Telp'),
      Email: data.get('Email')
    },
    Tanggal_Transaksi: data.get('Tanggal_Transaksi'),
    ID_Jenis_Pengiriman: data.get('ID_Jenis_Pengiriman'),
    ID_Metode_Pembayaran: data.get('ID_Metode_Pembayaran'),
    Total_Biaya: parseInt(data.get('Biaya')),
    Nomor_Resi: data.get('Nomor_Resi'),
    Pesan: data.get('Pesan'),
    Detail_Transaksi: JSON.parse(data.get('Detail_Transaksi'))
  }).then(function (response) {
    callback(true, response.data)
  }).catch(function (error) {
    callback(false, error)
  })
}

function capitalizeEachWord(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}