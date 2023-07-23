import { NextFunction, Request, Response } from "express";

import { CadastrarUsuarioControlador } from "./controladores/CadastrarUsuarioControlador";

export class Fachada {
  constructor(
    private cadastrarUsuarioControlador: CadastrarUsuarioControlador
  ) {}

  async cadastrarUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.cadastrarUsuarioControlador.cadastrarUsuario(
      request,
      response,
      next
    );
  }

  async readUsuario(request: Request, response: Response, next: NextFunction) {
    return this.cadastrarUsuarioControlador.readUsuario(
      request,
      response,
      next
    );
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.cadastrarUsuarioControlador.deleteUsuario(
      request,
      response,
      next
    );
  }
}
