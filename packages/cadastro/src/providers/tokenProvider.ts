import { env } from "@env";
import dayjs from "dayjs";
import { sign } from "jsonwebtoken";

import { ITokenProvider } from "./ITokenProvider";
import { Token } from "./token";

export class TokenProvider implements ITokenProvider {
  create(userId: string): Token {
    const now = new Date();

    const payload = {
      iat: now.getTime(),
    };

    const token = sign(payload, env.JWT_SECRET_KEY, {
      subject: userId,
      expiresIn: "3600s",
    });

    const expiresIn = dayjs().add(3600, "seconds").unix();

    return {
      token,
      expiresIn,
    };
  }
}
