export const login = async (data, callback) => {
  const URL = "http://localhost:3000/api/v1/users/auth/login";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      callback(data.status === 200 ? true : false, data);
    })
    .catch((err) => {
      callback(false, err);
    });
}
