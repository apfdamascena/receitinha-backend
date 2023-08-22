import Joi from "joi";

import { Conquista } from "./Conquista";

export interface ICadastroConquistaRequest {
  usuarioId: string;
  receitaId: string;
  titulo: string;
  imagemDesbloqueada: string;
  imagemBloqueada: string;
}

export interface ICadastroConquistaResponse {
  conquistaId?: string;
  conquista?: Conquista;
}

export const ConquistaSchema = Joi.object({
  titulo: Joi.string(),
  imagemDesbloqueada: Joi.string(),
  imagemBloqueada: Joi.string(),
});
