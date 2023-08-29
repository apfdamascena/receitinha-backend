import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"
import url from "url"
import { Routes } from "./routes"

const app = express()
app.use(express.json())
app.use(cors())

const routes = new Routes();
app.post("/login", routes.login.bind(routes));

app.use("/cadastrar-usuario", httpProxy("http://localhost:3002"))

app.use("/desbloquear-conquista", httpProxy("http://localhost:3003/desbloquear-conquista"));

const receitaProxy = httpProxy('http://localhost:3004/', {
  proxyReqPathResolver: req => url.parse(req.baseUrl).path
});

app.use('/receita/:id', receitaProxy);
app.use('/receitas', receitaProxy);

export default app;