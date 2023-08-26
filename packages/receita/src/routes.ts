import { NextFunction, Request, Response } from "express";

import { CadastroReceitaFactory } from "./controladoresFactories/CadastroReceitaFactory";
import { Fachada } from "./fachada";
import { HttpStatus } from "./http/HttpStatus";
import { parseType } from "./parseType";
import { ICadastroReceitaRequest } from "./receita/CadastroReceitaDTO";
import { Receita } from "./receita/Receita";

export class Routes {
  private fachada: Fachada;

  constructor() {
    const cadastroReceitaControlador = CadastroReceitaFactory.create();
    this.fachada = new Fachada(cadastroReceitaControlador);
  }

  async cadastrarReceita(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        titulo,
        imagem,
        descricao,
        duracao,
        dificuldade,
        ingredientes,
        passos,
        conquistaId,
      } = parseType<ICadastroReceitaRequest>(request.body);

      const novaReceita = new Receita({
        titulo,
        imagem,
        descricao,
        duracao,
        dificuldade,
        ingredientes,
        passos,
        conquistaId,
      });
      const conquista = await this.fachada.cadastrarReceita(novaReceita);

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

  async readReceita(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = parseType<ICadastroReceitaRequest>(request.params);

      const usuario = await this.fachada.getReceita(id);

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

  async readAllReceitas(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const receitas = await this.fachada.getAllReceitas();

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
