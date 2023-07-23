import "dotenv/config";
import { InvalidVariablesError } from "@error";
import { z } from "zod";

const variables = z.object({
  NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),
  PORT: z.coerce.number().default(3001),
  IPV4: z.string().default("0.0.0.0"),
  URL_DATABASE: z.string(),
  DATABASE_NAME: z.string(),
  RECEITAS_API_KEY: z.string(),
});

const ENV_VARIABLES = variables.safeParse(process.env);

if (ENV_VARIABLES.success === false) {
  console.log(
    "[env]: Invalid environment variables",
    ENV_VARIABLES.error.format()
  );

  throw new InvalidVariablesError();
}

export const env = ENV_VARIABLES.data;
