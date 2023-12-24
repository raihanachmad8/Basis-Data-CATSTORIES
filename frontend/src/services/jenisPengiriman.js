import axios from "axios"

export const getAllJenisPengiriman = async (search, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pengiriman?search=${search}&sort=Jenis_Pengiriman&orderBy=asc`
  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data)
    })
    .catch((error) => {
      callback(error)
    })
}

export const updateJenisPengiriman = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pengiriman/update"

  await axios
    .put(URL, {
      ID_Jenis_Pengiriman: data.get("ID_Jenis_Pengiriman"),
      Jenis_Pengiriman: capitalizeEachWord(data.get("Jenis_Pengiriman")),
    })
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}

export const deleteJenisPengiriman = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pengiriman/delete/${id}`

  await axios
    .delete(URL)
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}

export const createJenisPengiriman = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pengiriman/create"

  await axios
    .post(URL, {
      Jenis_Pengiriman: capitalizeEachWord(data.get("Jenis_Pengiriman")),
    })
    .then((response) => {
      callback(true, response)
    })
    .catch((error) => {
      callback(false, error)
    })
}

function capitalizeEachWord(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}