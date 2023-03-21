import axios from "axios";

const default_headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const fetch = (headers = default_headers) => {
  return axios.create({
    baseURL: "http://www.localhost:3000/",
    timeout: 1000,
    headers,
  });
};
