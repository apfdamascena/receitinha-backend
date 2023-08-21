import { Token } from "./token";

export interface ITokenProvider {
  create(userId: string): Token;
}
