import axios from "axios";
export const getAllKucing = async (ref, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing"


  await fetch(URL)
    .then(res => res.json())
    .then(data => {
      callback(data.data)
      ref.current.classList.add("hidden")
    })
    .catch(err => {
      callback(err)
    })
}

export const getKucingOption = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing"

  await axios
    .get(URL)
    .then((response) => {
      callback(response.data.data.filter((item) => item.Status === "Tersedia"));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing/update";
  try {
    const requestOptions = {
      method: "PUT",
      body: data,
    };

    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();

    callback(responseData.status === 201);
  } catch (error) {
    callback(false, error);
  }
}

export const createKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/kucing/create";

  try {
    const requestOptions = {
      method: "POST",
      body: data,
    };

    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();

    callback(responseData.status === 201, responseData);
  } catch (error) {
    callback(false, error);
  }
}

export const getKucingById = async (id, callback) => {
  const URL = `http://localhost:3000/api/v1/cat-stories/kucing/${id}`;

  await fetch(URL)
    .then(res => res.json())
    .then(data => {
      callback(data.data)
    })
    .catch(err => {
      callback(err)
    })
}

export const deleteKucing = ((id, callback) => {
  axios.delete(`http://localhost:3000/api/v1/cat-stories/kucing/delete/${id}`).then(res => {
    callback(true, res.data)
  }).catch(err => {
    callback(false, err)
  })
})
