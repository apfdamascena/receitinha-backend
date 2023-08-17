import { PrismaClient } from "@prisma/client";
import { Collection, Db, Document, MongoClient } from "mongodb";

import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class RepositorioUsuario implements IRepositorioUsuario {
  prisma: PrismaClient;

  constructor(private database: PrismaClient) {}

  async findByEmail(email: string): Promise<Usuario | null> {
    const user = await this.database.usuario.findFirst({
      where: {
        email,
      },
    });

    console.log(user);

    // const { nome, email, senha } = user;

    return null;

    // return user;
    // const data = (await this.dataBaseCollection.findOne({ email })) as unknown;
    // const user = data as Usuario;
    // return user;
  }

  async save(usuario: Usuario): Promise<Usuario | null> {
    // usuario.created_at = new Date();
    // usuario.updated_at = new Date();
    const teste = await this.database.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: "1234",
      },
    });

    console.log(teste);
    // await this.dataBaseCollection.insertOne(usuario);
    // return usuario;
    return null;
  }

  async findUserById(userId: string): Promise<Usuario | null> {
    return null;
    // const data = (await this.dataBaseCollection.findOne({
    //   id: userId,
    // })) as unknown;
    // const user = data as Usuario;
    // return user;
  }

  async getConquistas(userId: string): Promise<string[]> {
    return [];
    // const data = (await this.dataBaseCollection.findOne({
    //   id: userId,
    // })) as unknown;
    // const user = data as Usuario;
    // return user.conquistas;
  }

  async deleteUser(userId: string): Promise<Usuario | null> {
    return null;
    // const data = (await this.dataBaseCollection.deleteOne({
    //   id: userId,
    // })) as unknown;
    // const user = data as Usuario;
    // return user;
  }

  async updateUser(userId: string, nome: string): Promise<Usuario | null> {
    return null;
    // const data = (await this.dataBaseCollection.findOneAndUpdate(
    //   { id: userId },
    //   { $set: { nome: nome } },
    //   { upsert: false }
    // )) as unknown;
    // const user = data as Usuario;
    // return user;
  }
}
