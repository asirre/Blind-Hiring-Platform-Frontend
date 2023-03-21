import axios from "axios";

export const callLambda = ({token, method = "get", url, contentType = "application/json", data = ""}) => {
  return axios({
    method: method,
    url: url,
    headers: {
      Authorization: token,
      "Content-Type": contentType,
    },
    data: data
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};