const axios = require("axios");

const URL = "https://randomuser.me/api";

export let randomPersonInfo: any;

export const randomPerson = () => {
  const response = axios.get(URL);
  randomPersonInfo = response;
  return response;
};
