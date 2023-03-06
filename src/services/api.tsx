import axios from "axios";

export const api = axios.create({
  baseURL: "https://access-fakeapi-12yk.onrender.com",
  timeout: 5000,
});