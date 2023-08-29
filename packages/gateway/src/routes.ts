import { NextFunction, Request, Response } from "express";

import { Fachada } from "./fachada";
import { HttpStatus } from "./http/HttpStatus";
import { parseType } from "./parseType";

import { AutenticaUsuarioFactory } from "@controlerFactories"
import { ILoginRequest, LoginSchema } from "./login/ILoginRequestDTO";
import { formatErrors } from "./utils/FormatError";
import { Usuario } from "@usuario";

export class Routes {
  private fachada: Fachada;

  constructor() {
    const autenticaControlador = AutenticaUsuarioFactory.create();
    this.fachada = new Fachada(autenticaControlador);
  }

  async login(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const body = parseType<ILoginRequest>(request.body);

      const { value: input, error } = LoginSchema.validate(body, {
        abortEarly: true,
      });

      const { email, senha } = input;

      if (error)
        next({
          status: HttpStatus.BAD_REQUEST,
          message: formatErrors(error.details),
        });

      const usuario = new Usuario({
        email,
        senha,
        nome: "", // preguicinha
        conquistas: [], // preguiça dms também
      });

      const { token } = await this.fachada.authenticate(usuario);

      response.locals = {
        ...response.locals,
        data: token,
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
}
