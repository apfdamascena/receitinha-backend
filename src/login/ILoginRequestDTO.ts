import Joi from "joi";

export interface ILoginRequest {
  email: string;
  senha: string;
}

export interface ILoginResponse {
  token: string;
}

export const LoginSchema = Joi.object({
  senha: Joi.string().required().min(6),
  email: Joi.string().required().email(),
});
