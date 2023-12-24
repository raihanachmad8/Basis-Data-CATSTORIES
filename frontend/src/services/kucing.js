import axios from "axios";
export const getAllKucing = async (ref, sort, order, name, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/kucing?search=${name}&sort=${sort}&orderBy=${order}`;

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data);
      ref.current.classList.add("hidden")
    })
    .catch((error) => {
      callback(error);
    });
};

export const getKucingOption = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing"

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data.filter((item) => item.Status === "Tersedia"));
    })
    .catch((error) => {
      callback(error);
    });
};

export const updateKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing/update";

  await axios
    .put(URL, data)
    .then((response) => {
      callback(true, response.data.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const createKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing/create";

  await axios
    .post(URL, data)
    .then((response) => {
      callback(true, response.data.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getKucingById = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/kucing/${id}`;

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      callback(error);
    });
};

export const deleteKucing = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/kucing/delete/${id}`;

  await axios
    .delete(URL)
    .then((response) => {
      callback(true, response.data.data);
    })
    .catch((error) => {
      callback(false, error);
    });
};


export const getCountJenisKucing = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing/count";
  await axios.get(URL)
    .then((response) => {
      callback(response.data.data);
    })
    .catch((error) => {
      callback(error);
    });
}