import axios from "axios"

export const getAllPembeli = async (search, sort, order, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pembeli?search=${search}&sort=${sort}&orderBy=${order}`;

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      callback(error);
    });
}

export const updatePembeli = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembeli/update";

  await axios
    .put(URL, {
      ID_Pembeli: data.get("ID_Pembeli"),
      Nama_Pembeli: capitalizeEachWord(data.get("Nama_Pembeli")),
      Alamat: data.get("Alamat"),
      Email: data.get("Email"),
      No_Telp: data.get("No_Telp"),
    })
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export const deletePembeli = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/pembeli/delete/${id}`;

  await axios
    .delete(URL)
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
}

function capitalizeEachWord(string) {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
}