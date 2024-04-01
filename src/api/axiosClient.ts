import axios from "axios";

export const createClient = () => {
  const instance = axios.create({
    baseURL: "",
  });

  return instance;
};
