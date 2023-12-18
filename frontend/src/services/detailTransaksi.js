import axios from "axios";

export const getDetailTransaksi = async (id, callback) => {
  await axios
    .get(`http://localhost:3000/api/v1/cat-stories/checkout/payment/details/${id}`)
    .then(function (response) {
      callback(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}