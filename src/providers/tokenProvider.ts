import { env } from "@env";
import { sign } from "jsonwebtoken";

import { ITokenProvider } from "./ITokenProvider";

export class TokenProvider implements ITokenProvider {
  create(userId: string): string {
    const now = new Date();

    const payload = {
      iat: now.getTime(),
    };

    const token = sign(payload, env.JWT_SECRET_KEY, {
      subject: userId,
      expiresIn: "3600s",
    });

    return token;
  }
}
