import { env } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": env.RECEITAS_API_KEY,
  },
});
