import { PrismaClient } from "@prisma/client";

class DatabaseSingleton {
  private static instance: DatabaseSingleton | null = null;
  private database: PrismaClient;

  private constructor() {
    this.database = new PrismaClient();
  }

  getDatabase(): PrismaClient {
    return this.database;
  }

  static getInstance(): DatabaseSingleton {
    if (!DatabaseSingleton.instance) {
      DatabaseSingleton.instance = new DatabaseSingleton();
    }

    return DatabaseSingleton.instance;
  }
}

export default DatabaseSingleton;
