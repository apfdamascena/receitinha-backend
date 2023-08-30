import Joi from "joi";

import { Usuario } from "./Usuario";

export interface ICadastroUsuarioRequest {
  id: string;
  nome: string;
  senha: string;
  email: string;
  conquistas: string[];
}

export interface ICadastroUsuarioResponse {
  usuario: Usuario;
}

export const CadastroUsuarioSchema = Joi.object({
  senha: Joi.string().required().min(6),
  email: Joi.string().required().email(),
  name: Joi.string().required().min(6).max(30),
});
