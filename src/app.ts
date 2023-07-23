import "reflect-metadata";
import cors from "cors";
import express, { Router } from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler, notFoundHandler, requestHandler } from "./middleware";
import { Routes } from "./routes";

const API_VERSION = "/api/v1";
const app = express();

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
