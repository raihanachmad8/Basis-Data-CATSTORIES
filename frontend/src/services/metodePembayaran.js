import axios from "axios"

export const getAllMetodePembayaran = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembayaran"
  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const updateMetodePembayaran = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembayaran/update"

  await axios
    .put(URL, {
      ID_Metode_Pembayaran: data.get("ID_Metode_Pembayaran"),
      Metode_Pembayaran: data.get("Metode_Pembayaran"),
    })
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deleteMetodePembayaran = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pembayaran/delete/${id}`

  await axios
    .delete(URL)
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

