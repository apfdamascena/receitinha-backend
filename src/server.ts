import app from "./app";
import { env } from "./env";

(async () => {
  try {
    app.listen(env.PORT, env.IPV4, async () => {
      const message = `[Server]: Server ready at port ${env.PORT}`;
    });
  } catch (error) {
    console.log(`[Receitinha-Server]: failed to connect.`);
  }
})();
