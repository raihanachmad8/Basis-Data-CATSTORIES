import axios from "axios";

export const getAllJenisKucing = async (search, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/jenis?search=${search}&sort=Jenis_Kucing&orderBy=asc`;

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      callback(error);
    });
}

export const editJenisKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis/update";

  await axios
    .put(URL, {
      ID_Jenis: data.get("ID_Jenis"),
      Jenis_Kucing: capitalizeEachWord(data.get("Jenis_Kucing")),
    })
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export const getOptionKucing = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis";

  await axios
    .get(URL)
    .then((response) => {
      const data = response.data.data.map((item) => ({
        value: item.ID_Jenis,
        label: item.Jenis_Kucing,
      }));

      callback(data);
    })
    .catch((error) => {
      callback(error);
    });
}

export const createJenisKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis/create";

  await axios
    .post(URL, {
      Jenis_Kucing: capitalizeEachWord(data.get("Jenis_Kucing")),
    })
    .then((response) => {
      callback(true, response);
    })
    .catch((error) => {
      callback(false, error);
    });
}

export const deleteJenisKucing = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/jenis/delete/${id}`

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