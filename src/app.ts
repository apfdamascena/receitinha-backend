import "reflect-metadata";

import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler, notFoundHandler, requestHandler } from "./middleware";
import { Routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

const routes = new Routes();

app.post("/login", routes.login.bind(routes));
app.post("/cadastrar-usuario", routes.cadastrarUsuario.bind(routes));
app.get("/usuario/:id", routes.readUsuario.bind(routes));
app.delete("/usuario/:id", routes.deleteUsuario.bind(routes));
app.patch("/usuario", routes.updateUsuario.bind(routes));
app.get("/receitas-externas", routes.getReceitasExternas.bind(routes));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);

app.use(express.urlencoded({ extended: true }));

export default app;
