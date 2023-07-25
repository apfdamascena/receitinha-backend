import { NextFunction, Request, Response } from "express";

import { CadastroUsuarioFactory } from "./controladoresFactories/CadastroUsuarioFactory";
import { ReceitasExternasFactory } from "./controladoresFactories/ReceitaExternaFactory";
import { Fachada } from "./fachada";
import { HttpStatus } from "./http/HttpStatus";
import { parseType } from "./parseType";
import { ICadastroUsuarioRequest } from "./usuario/CadastroUsuarioDTO";
import { Usuario } from "./usuario/Usuario";

export class Routes {
  private fachada: Fachada;

  constructor() {
    const cadastroUsuarioControlador = CadastroUsuarioFactory.create();
    const subsitemaReceitasExternas = ReceitasExternasFactory.create();
    this.fachada = new Fachada(
      cadastroUsuarioControlador,
      subsitemaReceitasExternas
    );
  }

  async cadastrarUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { nome, senha, email } = parseType<ICadastroUsuarioRequest>(
        request.body
      );

      const novoUsuario = new Usuario({ nome, senha, email, conquistas: [] });
      const usuario = await this.fachada.cadastrarUsuario(novoUsuario);

      response.locals = {
        ...response.locals,
        usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
      console.log(error);
    }
  }

  async readUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id: usuarioId } = parseType<ICadastroUsuarioRequest>(
        request.params
      );
      const usuario = await this.fachada.readUsuario(usuarioId);

      response.locals = {
        ...response.locals,
        usuario,
      };
      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
      console.log(error);
    }
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.deleteUsuario(request, response, next);
  }

  async updateUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.updateUsuario(request, response, next);
  }

  async getReceitasExternas(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    this.fachada.getReceitasExternas(request, response, next);
  }
}
