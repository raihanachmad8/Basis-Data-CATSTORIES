import axios from "axios";

export const getAllJenisKucing = (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis";

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      callback(data.data);
    }).catch((err) => {
      callback(err);
    });
}

export const editJenisKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis/update";

  try {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ID_Jenis: data.get("ID_Jenis"),
        Jenis_Kucing: data.get("Jenis_Kucing"),
      }),
    };

    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();

    callback(responseData.status === 201);
  } catch (error) {
    callback(false, error);
  }
}

export const getOptionKucing = (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis";

  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      const data = res.data.map((item) => ({
        value: item.ID_Jenis,
        label: item.Jenis_Kucing,
      }));
      callback(data);
    }).catch((err) => {
      callback(err);
    });
}

export const createJenisKucing = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/jenis/create";
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Jenis_Kucing: data.get("Jenis_Kucing"),
      }),
    };

    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();

    callback(responseData.status === 201, responseData);
  } catch (error) {
    callback(false, error);
  }
}

export const deleteJenisKucing = ((id, callback) => {
  axios.delete(`http://localhost:3000/api/v1/cat-stories/jenis/delete/${id}`).then(res => {
    callback(true, res.data)
  }).catch(err => {
    callback(false, err)
  })
})