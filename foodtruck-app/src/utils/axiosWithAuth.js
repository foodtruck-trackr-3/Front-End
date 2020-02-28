import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authorization");

  return axios.create({
    headers: {
      Authorization: token
    },
    // baseURL: "http://localhost:5000/api" To be provided by Christopher, backend team
  });
};