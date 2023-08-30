import app from "./app";
import DatabaseSingleton from "./database";
import { env } from "./env";

(async () => {
  try {
    console.log("[Database]: connected");

    console.log("producer connected");

    app.listen(env.PORT, async () => {
      const message = `[Server]: Server ready at port ${env.PORT}`;
      console.log(message);
    });
  } catch (error) {
    console.log(`[Receitinha-Server]: failed to connect.`);
  }
})();
