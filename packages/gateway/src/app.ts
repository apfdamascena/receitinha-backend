import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"
import { receitaProxy, usuarioProxy} from './proxy';

const app = express()
app.use(express.json())
app.use(cors())

app.use("/desbloquear-conquista", httpProxy("http://localhost:3003/desbloquear-conquista"));

app.use('/cadastrar-usuario', usuarioProxy);
app.use('/receitas-externas', usuarioProxy);

app.use('/receita/:id', receitaProxy);
app.use('/receitas', receitaProxy);

export default app;