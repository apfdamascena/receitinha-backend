import { NextFunction, Request, Response } from "express";

import { CadastroUsuarioFactory } from "./controladoresFactories/CadastroUsuarioFactory";
import { ReceitasExternasFactory } from "./controladoresFactories/ReceitaExternaFactory";
import { Fachada } from "./fachada";
import { HttpStatus } from "./http/HttpStatus";
import { parseType } from "./parseType";
import { IReceitasExternasRequest } from "./receitasExternas/ReceitasExternasDTO";
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
        data: usuario,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
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
        data: usuario,
      };
      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }

  async deleteUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id: usuarioId } = parseType<ICadastroUsuarioRequest>(
        request.params
      );

      await this.fachada.deleteUsuario(usuarioId);

      response.locals = {
        ...response.locals,
        data: "usuario deletado",
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

  async updateUsuario(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const body = {
        ...request.params,
        ...request.body,
      };

      const { id, nome, email, senha, conquistas } =
        parseType<ICadastroUsuarioRequest>(body);

      const usuario = new Usuario(
        {
          nome,
          email,
          senha,
          conquistas,
        },
        id
      );

      console.log(usuario);

      const usuarioUpdate = await this.fachada.updateUsuario(usuario);

      response.locals = {
        ...response.locals,
        data: usuarioUpdate,
      };

      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }

  async getReceitasExternas(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { nome } = parseType<IReceitasExternasRequest>(request.query);

      if (!nome)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: "undefined value",
        });

      const receitas = await this.fachada.getReceitasExternas(nome);

      response.locals = {
        ...response.locals,
        data: receitas,
      };
      next();
    } catch (error) {
      if (error instanceof Error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: error.message,
        });
    }
  }
}
