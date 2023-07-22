import "dotenv/config";
import { z } from "zod";
import { InvalidVariablesError } from "@error"
 
const variables = z.object({
  NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),
  PORT: z.coerce.number().default(3001),
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