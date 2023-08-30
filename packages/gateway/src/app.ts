import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"
import { receitaProxy, usuarioProxy, conquistaProxy} from './proxy';
import url from "url"
import { Routes } from "./routes"
import { errorHandler, notFoundHandler, requestHandler } from '@middleware'
import { authorize } from '@middleware'

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

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);



export default app;