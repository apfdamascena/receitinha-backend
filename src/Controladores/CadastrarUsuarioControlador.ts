import { CadastroUsuario, ICadastroUsuarioRequest } from "@usuario";
import { NextFunction, Request, Response } from "express";
import { parseType } from "src/parseType";


export class CadastrarUsuarioControlador {

    constructor(private cadastroUsuario: CadastroUsuario){}

    async cadastrarUsuario(request: Request, response: Response, next: NextFunction){
        try {

            const body = parseType<ICadastroUsuarioRequest>(request.body);

            



        }catch(error){

        }
    }
}