var axios = require('axios');
var data = '{\n  "job_posting_id": "fromapi",\n  "organization": "Google",\n  "job_location": "Amsterdam",\n  "valid_until": "22.1.2021",\n  "contract_type": "contract of employment",\n  "emplyment_type": "full time",\n  "minimum_salary": 0,\n  "maximum_salary": 5000,\n  "remote_policy": "hybird",\n  "currency": "EUR",\n  "posting_date": "20.01.2020",\n  "job_position": "SE",\n  "description": "beep boop beep"\n}';

var config = {
    method: 'post',
    url: 'https://2etnadonz2.execute-api.eu-west-1.amazonaws.com/prod/job-posting',
    headers: {
        'Authorization': 'eyJraWQiOiJSMFhMQW10MG9jOW5EeHR2YzRVRnViSmRkaDJvVGRMUXkrTStoOU1XYlRVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX2x5N0V3M3VLbiIsImNvZ25pdG86dXNlcm5hbWUiOiJjZmFjYTExMi1hOWEwLTQ2NTQtYjE5Ny1mN2RlN2Y4NDQzNzgiLCJvcmlnaW5fanRpIjoiZDFhYTljYzEtZDRmMC00N2VkLWJjNzQtNTQ3NDNhMmVmYmQ5IiwiYXVkIjoiNDhvY21tZHNiZDZoYTFkOHBiZjI3amdkZWkiLCJldmVudF9pZCI6IjViNWNlNTM3LTA4YmMtNDZjNC1iNWNhLWJhN2VkMDVjZjIxYyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc4OTc1MzM3LCJleHAiOjE2Nzg5Nzg5MzcsImlhdCI6MTY3ODk3NTMzNywianRpIjoiODJhZTdhYjEtZWI4NC00NjVhLWExOTctMmE5ZDI0ODIyNjk5IiwiZW1haWwiOiJha2lya2luaXNAZ21haWwuY29tIn0.uBy5ksiWZbc3SYZ-4Ey4vMFVPR9Off3kIj0NiZDGqh8_9u7IIXfOYthsMtOM1D2mxb8uC18N3bfC2IGE0RSO9xjhN7_OF8sCzdqtwhM3Tus8mpqiOijFci5y0PvSykU917FvpujqRSbTmFbP9d8jksz-6ydM33layOlwQ-rR8oQVFbwZRlNuH_-l192LTgVdjXuRnWJy0giVRTG0TovmqpvCEy3kI1r0BIx42Ajkv2OdheQ5Ajze7scq7u9DScWnj3-VNMMuuW0R8k7WPv0RvHZJjLaECvJza3gEpbHoTwJkT1pcgJGXz81w6SxC7WMFenwrLZ0w3Y2Ynj1XaCiqNw',
        'Content-Type': 'text/plain'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
