import app from "./app";
import DatabaseSingleton from "./database";
import { env } from "./env";

(async () => {
  try {
    // DatabaseSingleton.getInstance().getDatabase().$connect();
    console.log("[Database]: connected");

    app.listen(env.PORT, async () => {
      const message = `[Server]: Server ready at port ${env.PORT}`;

      await DatabaseSingleton.getInstance()
        .getDatabase()
        .usuario.create({
          data: {
            email: "sofianovica1010@gmail.com",
            nome: "sofaia123",
            senha: "12345",
          },
        });
      console.log(message);
    });
  } catch (error) {
    console.log(`[Receitinha-Server]: failed to connect.`);
  }
})();
