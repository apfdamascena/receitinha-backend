import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"
import { receitaProxy, usuarioProxy, conquistaProxy} from './proxy';
import url from "url"
import { Routes } from "./routes"
import { authorize, requestHandler, errorHandler, notFoundHandler } from '@middleware'



const app = express()
app.use(express.json())
app.use(cors())
const routes = new Routes();

app.post("/login", routes.login.bind(routes));

app.use("/desbloquear-conquista", authorize, conquistaProxy);
app.use("/get-conquista/:id", authorize, conquistaProxy);

app.use('/cadastrar-usuario', usuarioProxy);
app.use('/receitas-externas', authorize, usuarioProxy);
app.use("/get-conquista", authorize, usuarioProxy);
app.use("/usuario/:id", authorize, usuarioProxy);


app.use('/receita/:id', authorize, receitaProxy);
app.use('/receitas', authorize, receitaProxy);


app.use(requestHandler);
app.use(errorHandler);
app.use(notFoundHandler);


export default app;