import app from "./app";
import { DatabaseConnection } from "./database";
import { env } from "./env";

(async () => {
  try {
    app.listen(env.PORT, env.IPV4, async () => {
      const message = `[Server]: Server ready at port ${env.PORT}`;
      console.log(message)
    });
  } catch (error) {
    console.log(`[Receitinha-Server]: failed to connect.`);
  }
})();
