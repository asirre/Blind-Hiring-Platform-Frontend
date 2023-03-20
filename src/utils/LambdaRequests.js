//var axios = require("axios");

import axios from "axios";

export const getAllJobs = () => {
  return axios({
    method: "get",
    url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting",
    headers: {
      Authorization:
        "eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw",
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const usersJob = () => {
  return axios({
    method: "get",
    url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting?username=radu",
    headers: {
      Authorization:
        "eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw",
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getCVFeedback = () => {
  return axios({
    method: "get",
    url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/cv-feedback/Moscow-Creative-Resume-Template.pdf",
    headers: {
      Authorization:
        "eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw",
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const createJobPosting = () => {
  return axios({
    method: "post",
    url: "https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting",
    headers: {
      Authorization:
        "eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw",
      "Content-Type": "text/plain",
    },
    data: '{\n  "job_posting_id": "test",\n  "organization": "Amazon",\n  "job_location": "Amsterdam",\n  "valid_until": "22.1.2021",\n  "contract_type": "contract of employment",\n  "emplyment_type": "full time",\n  "minimum_salary": 0,\n  "maximum_salary": 5000,\n  "remote_policy": "hybird",\n  "currency": "EUR",\n  "posting_date": "20.01.2020",\n  "job_position": "Quality Assurance",\n  "description": "beep boop beep"\n}',
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};


export const getUsersCVS = (user_id) => {
  console.log(user_id)
  return axios({
    method: 'get',
    url: `https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/user-metadata/${user_id}`,
    headers: {
        'Authorization': 'eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw',
        'Content-Type': 'text/plain'
    },
  })
    .then(function (response) {
      console.log(response)
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};