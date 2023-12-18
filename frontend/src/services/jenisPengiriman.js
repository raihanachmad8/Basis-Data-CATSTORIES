import axios from "axios"

export const getAllJenisPengiriman = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pengiriman"
  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const updateJenisPengiriman = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pengiriman/update"

  await axios
    .put(URL, {
      ID_Jenis_Pengiriman: data.get("ID_Jenis_Pengiriman"),
      Jenis_Pengiriman: data.get("Jenis_Pengiriman"),
    })
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deleteJenisPengiriman = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pengiriman/delete/${id}`

  console.log(id)

  await axios
    .delete(URL)
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const createJenisPengiriman = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pengiriman/create"

  await axios
    .post(URL, {
      Jenis_Pengiriman: data.get("Jenis_Pengiriman"),
    })
    .then((response) => {
      console.log(response)
      callback(response)
    })
    .catch((error) => {
      console.log(error)
    })
}