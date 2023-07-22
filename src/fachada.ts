import { NextFunction, Request, Response } from "express";
import { CadastrarUsuarioControlador } from "./controladores/CadastrarUsuarioControlador";


export class Fachada {

    constructor(private cadastrarUsuarioControlador: CadastrarUsuarioControlador){}

    async cadastrarUsuario(request: Request, response: Response, next: NextFunction){
        return this.cadastrarUsuarioControlador.cadastrarUsuario(request, response, next)
    }
}