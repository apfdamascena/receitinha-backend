import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"
import { receitaProxy, usuarioProxy} from './proxy';
import url from "url"
import { Routes } from "./routes"
import { errorHandler, notFoundHandler, requestHandler } from '@middleware'
import { authorize } from '@middleware'

const app = express()
app.use(express.json())
app.use(cors())
const routes = new Routes();

app.use("/desbloquear-conquista", authorize, httpProxy("http://localhost:3003/desbloquear-conquista"));

app.use('/cadastrar-usuario', usuarioProxy);
app.use('/receitas-externas', authorize, usuarioProxy);
app.post("/login", routes.login.bind(routes));


app.use('/receita/:id', authorize, receitaProxy);
app.use('/receitas', authorize, receitaProxy);

app.use(notFoundHandler);
app.use(errorHandler);
app.use(requestHandler);



export default app;