import { NotAuthenticatedError } from "@error";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "@env";
import { IRepositorioUsuario, RepositorioUsuario } from "@usuario";
import DatabaseSingleton from "@database";
import { HttpStatus } from "@http";
import { request } from "http";


type TokenVerify = {
  sub: string;
};

const usuarioRepositorio = new RepositorioUsuario(DatabaseSingleton.getInstance().getDatabase())

export const authorize = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { authorization } = request.headers;


    if (!authorization) throw new NotAuthenticatedError();

    const token = authorization.replace("Bearer", "").trim();
    const JWT_SECRET_KEY = env.JWT_SECRET_KEY;
    const jwtVerified = jwt.verify(token, JWT_SECRET_KEY);


    const verified = jwtVerified as TokenVerify;

    const { sub: id } = verified;

    const user = await usuarioRepositorio.findUserById(id);
    if(!user) throw new NotAuthenticatedError();
    
    return next();
  } catch (error) {
    if (error instanceof Error)
      next({
        status: HttpStatus.UNAUTHORIZED,
        message: error.message,
      });
    console.log(error);
  }
}

// export class Authorization {

//   usuarioRepositorio: IRepositorioUsuario

//   constructor(usuarioRepositorio: IRepositorioUsuario) {
//     this.usuarioRepositorio = usuarioRepositorio
//   }


//   async authorize(request: Request, response: Response, next: NextFunction) {
//     try {
//       const { authorization } = request.headers;

//       if (!authorization) throw new NotAuthenticatedError();

//       const token = authorization.replace("Bearer", "").trim();
//       const JWT_SECRET_KEY = env.JWT_SECRET_KEY;
//       const jwtVerified = jwt.verify(token, JWT_SECRET_KEY);


//       const verified = jwtVerified as TokenVerify;

//       const { sub: id } = verified;

//       this.usuarioRepositorio.findUserById(id)

//       return next();
//     } catch (error) {
//         if (error instanceof Error)
//         next({
//           status: HttpStatus.UNAUTHORIZED,
//           message: error.message,
//         });
//       console.log(error);
//     }
//   }
// }
