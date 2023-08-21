import { PrismaClient } from "@prisma/client";

import { Conquista } from "./Conquista";
import { IRepositorioConquista } from "./IRepositorioConquista";

export class RepositorioConquista implements IRepositorioConquista {
  prisma: PrismaClient;

  constructor(private database: PrismaClient) {}
  async findConquistaBy(receitaId: string): Promise<Conquista> {
    const conquista = await this.database.conquista.findFirst({
      where: {
        receitaId,
      },
    });

    const conquistaFound = conquista as Conquista;

    return conquistaFound;
  }

  async save(conquista: Conquista): Promise<Conquista> {
    const newConquista = await this.database.conquista.create({
      data: {
        titulo: conquista.titulo,
        imagemBloqueada: conquista.imagemBloqueada,
        imagemDesbloqueada: conquista.imagemDesbloqueada,
        receitaId: conquista.receitaId,
      },
    });
    return newConquista as Conquista;
  }
}
