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

app.get("/desbloquear-conquista", routes.desbloquearReceita.bind(routes));
app.post("/criar-conquista", routes.cadastrarConquista.bind(routes));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);

app.use(express.urlencoded({ extended: true }));

export default app;
