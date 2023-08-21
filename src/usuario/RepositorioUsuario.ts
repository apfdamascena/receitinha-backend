import { PrismaClient } from "@prisma/client";

import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class RepositorioUsuario implements IRepositorioUsuario {
  prisma: PrismaClient;

  constructor(private database: PrismaClient) {}

  async findByEmail(email: string): Promise<Usuario> {
    const user = await this.database.usuario.findFirst({
      where: {
        email,
      },
    });

    const userFound = user as Usuario;

    return userFound;
  }

  async save(usuario: Usuario): Promise<Usuario> {
    const password = usuario.senha || ""; // sem paciencia.
    const newUser = await this.database.usuario.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: password,
        conquistas: usuario.conquistas,
      },
    });

    return newUser as Usuario;
  }

  async findUserById(userId: string): Promise<Usuario> {
    const user = await this.database.usuario.findFirst({
      where: {
        id: userId,
      },
    });

    const userFound = user as Usuario;

    return userFound;
  }

  async getConquistas(userId: string): Promise<string[]> {
    const userFound = await this.database.usuario.findFirst({
      where: {
        id: userId,
      },
    });

    const user = userFound as Usuario;
    return user.conquistas;
  }

  async deleteUser(userId: string): Promise<void> {
    await this.database.usuario.deleteMany({
      where: {
        id: userId,
      },
    });
  }

  async updateUser(userId: string, nome: string): Promise<Usuario> {
    const userUpdated = await this.database.usuario.update({
      where: {
        id: userId,
      },
      data: {
        nome,
      },
    });

    const user = userUpdated as Usuario;
    return user;
  }
}
