import axios from "axios";

const baseUrl = "https://restcountries.com/v2";

export const Api = {
  getAll: async () => axios.get(`${baseUrl}/all`),
  getItem: async (title) => axios.get(`${baseUrl}/name/${title}`),
  filterCountry: async (region) => axios.get(`${baseUrl}/region/${region}`),
  searchByName: async (name) => axios.get(`${baseUrl}/name/${name}`),
};
