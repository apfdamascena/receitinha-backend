import { PrismaClient } from "@prisma/client";

import { IRepositorioReceita } from "./IRepositorioReceita";
import { Receita } from "./Receita";

export class RepositorioReceita implements IRepositorioReceita {
  prisma: PrismaClient;

  constructor(private database: PrismaClient) {}
  async findReceitaBy(id: string): Promise<Receita> {
    const receita = await this.database.receita.findFirst({
      where: {
        id,
      },
    });

    const receitaFound = receita as Receita;

    return receitaFound;
  }

  async save(receita: Receita): Promise<Receita> {
    const newReceita = await this.database.receita.create({
      data: {
        titulo: receita.titulo,
        imagem: receita.imagem,
        ingredientes: receita.ingredientes,
        descricao: receita.descricao,
        dificuldade: receita.dificuldade,
        duracao: receita.duracao,
        passos: receita.passos,
      },
    });
    return newReceita as Receita;
  }

  async findAllReceitas(): Promise<[Receita]> {
    const receitas = await this.database.receita.findMany();
    return receitas as [Receita];
  }

  async deleteReceitaBy(id: string): Promise<Receita> {
    const receita = await this.database.receita.delete({
      where: {
        id,
      },
    });

    const receitaFound = receita as Receita;

    return receitaFound;
  }
}
