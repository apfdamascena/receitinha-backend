import app from "./app";
import DatabaseSingleton from "./database";
import { env } from "./env";

(async () => {
  try {
    console.log("[Database]: connected");

    app.listen(env.PORT, async () => {
      const message = `[Server]: Server ready at port ${env.PORT}`;

      const teste = await DatabaseSingleton.getInstance()
        .getDatabase()
        .usuario.findMany();
      console.log(message);
      console.log(teste);
    });
  } catch (error) {
    console.log(`[Receitinha-Server]: failed to connect.`);
  }
})();
