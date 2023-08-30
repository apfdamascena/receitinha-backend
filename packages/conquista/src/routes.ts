import { NextFunction, Request, Response } from "express";

import { CadastroConquista } from "./conquista/CadastroConquista";
import { ICadastroConquistaRequest } from "./conquista/CadastroConquistaDTO";
import { Conquista } from "./conquista/Conquista";
import { CadastroConquistaFactory } from "./controladoresFactories/CadastroConquistaFactory";
import { Fachada } from "./fachada";
import { HttpStatus } from "./http/HttpStatus";
import { parseType } from "./parseType";

export class Routes {
  private fachada: Fachada;

  constructor() {
    const cadastroUsuarioControlador = CadastroConquistaFactory.create();
    this.fachada = new Fachada(cadastroUsuarioControlador);
  }

  async desbloquearReceita(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { usuarioId, receitaId } = parseType<ICadastroConquistaRequest>(
        request.query
      );

      const conquista = await this.fachada.desbloquearConquista(
        receitaId,
        usuarioId
      );

      response.locals = {
        ...response.locals,
        data: conquista.conquistaId,
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

  async cadastrarConquista(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { titulo, imagemBloqueada, imagemDesbloqueada, receitaId } =
        parseType<ICadastroConquistaRequest>(request.body);

      const novaConquista = new Conquista({
        titulo,
        imagemBloqueada,
        imagemDesbloqueada,
        receitaId,
      });
      const conquista = await this.fachada.cadastrarConquista(novaConquista);

      response.locals = {
        ...response.locals,
        data: conquista,
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

  async getConquista(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = parseType<ICadastroConquistaRequest>(request.params);

      const usuario = await this.fachada.getConquista(id);

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
}
