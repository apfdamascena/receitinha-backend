import { Collection, Db, Document, MongoClient } from "mongodb";
import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";


export class RepositorioUsuario implements IRepositorioUsuario {

    dataBaseCollection: Collection<Document>;

    constructor(database: Db){
        this.dataBaseCollection = database.collection("usuarios");
    }

    async findByEmail(email: string): Promise<Usuario> { 
        const data = (await this.dataBaseCollection.findOne( { email })) as unknown
        const user = data as Usuario
        return user
    }
    async save(usuario: Usuario): Promise<void> {
        await this.dataBaseCollection.insertOne(usuario);
    }

    findUserById(userId: string): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }

    getConquistas(userId: string): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    
}