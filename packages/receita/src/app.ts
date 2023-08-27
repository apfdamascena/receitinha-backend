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

app.post("/receita", routes.cadastrarReceita.bind(routes));
app.delete("/receita/:id", routes.deleteReceita.bind(routes));

app.get("/receita/:id", routes.readReceita.bind(routes));
app.get("/receitas", routes.readAllReceitas.bind(routes));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);

app.use(express.urlencoded({ extended: true }));

export default app;
