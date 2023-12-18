import axios from "axios"

export const getAllPembeli = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembeli";

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const updatePembeli = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembeli/update";

  await axios
    .put(URL, {
      ID_Pembeli: data.get("ID_Pembeli"),
      Nama_Pembeli: data.get("Nama_Pembeli"),
      Alamat: data.get("Alamat"),
      Email: data.get("Email"),
      No_Telp: data.get("No_Telp"),
    })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      console.log(error);
    });
}