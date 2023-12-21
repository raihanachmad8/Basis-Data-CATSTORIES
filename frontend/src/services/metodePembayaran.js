import axios from "axios"

export const getAllMetodePembayaran = async (search, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pembayaran?search=${search}&sort=Metode_Pembayaran&orderBy=asc`
  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data)
    })
    .catch((error) => {
      callback(error)
    })
}

export const updateMetodePembayaran = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembayaran/update"

  await axios
    .put(URL, {
      ID_Metode_Pembayaran: data.get("ID_Metode_Pembayaran"),
      Metode_Pembayaran: capitalizeFirstLetter(data.get("Metode_Pembayaran")),
    })
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}

export const deleteMetodePembayaran = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pembayaran/delete/${id}`

  await axios
    .delete(URL)
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}

export const createMetodePembayaran = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembayaran/create"

  await axios
    .post(URL, {
      Metode_Pembayaran: capitalizeFirstLetter(data.get("Metode_Pembayaran")),
    })
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}