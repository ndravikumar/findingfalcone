import axios from "axios";

const defaultHeaders = {
  Accept: "application/json",
};

// status check methods
export const checkData = (response) => {
  if (
    response.data &&
    response.data.status >= 200 &&
    response.data &&
    response.data.status < 400
  ) {
    return response.data;
  }
  return response;
};

// REST API methods with token
export const checkError = (error) => {
  if (error && error.response && [401, 403].includes(error.response.status)) {
    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    window.sessionStorage.clear();
    window.location.reload();
  }
  return error.response;
};

export const httpGet = (url) => {
  return axios(url, {
    method: "GET",
    headers: defaultHeaders,
  })
    .then(checkData)
    .catch(checkError);
};

export const httpPost = (url, body) => {
  return axios
    .post(url, body, { headers: defaultHeaders })
    .then(checkData)
    .catch(checkError);
};
