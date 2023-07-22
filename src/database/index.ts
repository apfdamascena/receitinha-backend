
import { env } from "@env";
import { Usuario } from "@usuario";
import { Db, MongoClient } from "mongodb";
import { v4 as uuid } from "uuid";

export class DatabaseConnection {

    public database: Db;

    constructor(){
        this.startConnection()
    }

    async startConnection(){
        try {
            const client = new MongoClient(env.URL_DATABASE);

            await client.connect()
            this.database = client.db(env.DATABASE_NAME);

            console.log("database connected")

        } catch(error){
            console.log(error)
        }
    }
}

const databaseInstance = new DatabaseConnection()
export const database = databaseInstance.database;

