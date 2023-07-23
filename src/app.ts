import "reflect-metadata";
import { env } from "@env";
import axios from "axios";
import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler, notFoundHandler, requestHandler } from "./middleware";
import { Routes } from "./routes";

const API_VERSION = "/api/v1";
const app = express();

const api = axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": env.RECEITAS_API_KEY,
  },
});

(async () => {
  try {
    const teste = await api.get("/recipe?query=brownie");
    console.log(teste);
  } catch (error) {
    console.log(error);
  }
})();

app.use(cors());
app.use(express.json());
app.use(helmet());

const routes = new Routes();

app.post("/cadastrar-usuario", routes.cadastrarUsuario.bind(routes));
app.get("/usuario/:id", routes.readUsuario.bind(routes));
app.delete("/usuario/:id", routes.deleteUsuario.bind(routes));
app.patch("/usuario", routes.updateUsuario.bind(routes));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: true }));

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);

export default app;
