import axios from "axios";

export const api = axios.create({
  baseURL: "https://access-fakeapi-12yk.onrender.com",
  //baseURL: "http://localhost:3001",
  timeout: 10000,
});
