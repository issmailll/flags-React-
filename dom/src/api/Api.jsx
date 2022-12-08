import axios from "axios";

const baseUrl = "https://restcountries.com/v2";

export const Api = {
  getAll: async () => axios.get(`${baseUrl}/all`),
  getItem: async (title) => axios.get(`${baseUrl}/name/${title}`),
};
