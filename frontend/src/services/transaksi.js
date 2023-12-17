import axios from 'axios'

export const getAllTransaksi = (callback) => {
  axios.get('http://localhost:3000/api/v1/cat-stories/checkout/payment')
    .then(function (response) {
      callback(response.data.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

