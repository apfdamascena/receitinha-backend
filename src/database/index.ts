import { env } from "@env";
import { Db, MongoClient } from "mongodb";

class DatabaseSingleton {
  private static instance: DatabaseSingleton | null = null;
  private database: Db;

  private constructor() {
    const client = new MongoClient(env.URL_DATABASE);
    this.database = client.db(env.DATABASE_NAME);
  }

  getDatabase() {
    return this.database;
  }

  static getInstance() {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }

    return DatabaseSingleton.instance;
  }
}

export default DatabaseSingleton;
