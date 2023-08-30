import Joi from "joi";
import { Token } from "src/providers/token";

export interface ILoginRequest {
  email: string;
  senha: string;
}

export interface ILoginResponse {
  token: Token;
  id: String;
}

export const LoginSchema = Joi.object({
  senha: Joi.string().required().min(6),
  email: Joi.string().required().email(),
});
