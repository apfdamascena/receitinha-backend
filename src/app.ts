import "reflect-metadata";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler, notFoundHandler, requestHandler } from "./middleware";

const API_VERSION = "/api/v1";
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: true }));
// app.use(API_VERSION, routes);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);



export default app;