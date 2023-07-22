import { NextFunction, Request, Response } from "express";
import { CadastroUsuarioFactory } from "./controladoresFactories/CadastroUsuarioFactory";
import { Fachada } from "./fachada";

export class Routes {

    private fachada: Fachada

    constructor(){
        const cadastroUsuarioControlador = CadastroUsuarioFactory.create()
        this.fachada = new Fachada(cadastroUsuarioControlador)
    }

    async cadastrarUsuario(request: Request, response: Response, next: NextFunction){
        this.fachada.cadastrarUsuario(request, response, next);
    }
}