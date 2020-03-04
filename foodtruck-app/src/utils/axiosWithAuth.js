import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authorization");

  return axios.create({
    headers: {
      authorization: token
    },
    baseURL: "https://lftt3.herokuapp.com" 
  });
};