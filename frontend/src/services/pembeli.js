import axios from "axios"

export const getAllPembeli = async (callback) => {
  const URL = "http://localhost:3000/api/v1/cat-stories/pembeli";

  await axios
    .get(URL)
    .then((response) => {
      console.log(response.data.data);
      callback(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}