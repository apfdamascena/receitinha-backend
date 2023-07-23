import { genSaltSync, hashSync } from "bcryptjs";

import {
  ICadastroUsuarioRequest,
  ICadastroUsuarioResponse,
} from "./CadastroUsuarioDTO";
import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class CadastroUsuario {
  constructor(private repositorioUsuario: IRepositorioUsuario) {}

  async cadastrarUsuario(
    input: ICadastroUsuarioRequest
  ): Promise<ICadastroUsuarioResponse> {
    const { email, nome, senha } = input;

    const isUsuarioAlreadyExists = await this.repositorioUsuario.findByEmail(
      email
    );

    if (isUsuarioAlreadyExists) throw new Error("Usuario já existe");

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: hashSync(senha, genSaltSync(10)),
      conquistas: [],
    });

    const usuario = await this.repositorioUsuario.save(novoUsuario);
    delete usuario.senha;

    return { usuario };
  }

  async readUsuario(
    input: ICadastroUsuarioRequest
  ): Promise<ICadastroUsuarioResponse> {
    const { id } = input;

    const usuario = await this.repositorioUsuario.findUserById(id);
    delete usuario.senha;

    return { usuario };
  }

  async deleteUsuario(
    input: ICadastroUsuarioRequest
  ): Promise<ICadastroUsuarioResponse> {
    const { id } = input;

    const usuario = await this.repositorioUsuario.deleteUser(id);
    delete usuario.senha;

    return { usuario };
  }

  async updateUsuario(
    input: ICadastroUsuarioRequest
  ): Promise<ICadastroUsuarioResponse> {
    // [UPDATE] quando CRUD de conquistas tiver pronto a gente coloca aqui
    const { id, nome } = input;

    const usuario = await this.repositorioUsuario.updateUser(id, nome);

    return { usuario };
  }
}
