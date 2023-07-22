import { Collection, Db, Document, MongoClient } from "mongodb";

import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class RepositorioUsuario implements IRepositorioUsuario {
  dataBaseCollection: Collection<Document>;

  constructor(database: Db) {
    this.dataBaseCollection = database.collection("usuarios");
  }

  async findByEmail(email: string): Promise<Usuario> {
    const data = (await this.dataBaseCollection.findOne({ email })) as unknown;
    const user = data as Usuario;
    return user;
  }
  async save(usuario: Usuario): Promise<Usuario> {
    usuario.created_at = new Date();
    usuario.updated_at = new Date();
    await this.dataBaseCollection.insertOne(usuario);
    return usuario;
  }

  async findUserById(userId: string): Promise<Usuario> {
    const data = (await this.dataBaseCollection.findOne({
      id: userId,
    })) as unknown;
    const user = data as Usuario;
    return user;
  }

  async getConquistas(userId: string): Promise<string[]> {
    const data = (await this.dataBaseCollection.findOne({
      id: userId,
    })) as unknown;
    const user = data as Usuario;
    return user.conquistas;
  }
}
