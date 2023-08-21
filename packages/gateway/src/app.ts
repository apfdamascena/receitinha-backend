import express, { Request, Response } from 'express'
import cors from "cors" 
import httpProxy from "express-http-proxy"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/cadastrar-usuario", httpProxy("http://localhost:3002"))

export default app;