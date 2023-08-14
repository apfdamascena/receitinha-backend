import { genSaltSync, hashSync } from "bcryptjs";

import { ICadastroUsuarioResponse } from "./CadastroUsuarioDTO";
import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class CadastroUsuario {
  constructor(private repositorioUsuario: IRepositorioUsuario) {}

  async cadastrarUsuario(input: Usuario): Promise<ICadastroUsuarioResponse> {
    const { email, nome, senha } = input;

    const isUsuarioAlreadyExists = await this.repositorioUsuario.findByEmail(
      email
    );

    if (isUsuarioAlreadyExists) throw new Error("Usuario já existe");

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: hashSync(senha || "", genSaltSync(10)),
      conquistas: [],
    });

    const usuario = await this.repositorioUsuario.save(novoUsuario);
    delete usuario.senha;

    return { usuario };
  }

  async readUsuario(id: string): Promise<ICadastroUsuarioResponse> {
    const usuario = await this.repositorioUsuario.findUserById(id);
    delete usuario.senha;
    return { usuario };
  }

  async readUsuarioBy(email: string): Promise<ICadastroUsuarioResponse> {
    const usuario = await this.repositorioUsuario.findByEmail(email);
    delete usuario.senha;
    return { usuario };
  }

  async deleteUsuario(usuarioId: string): Promise<void> {
    await this.repositorioUsuario.deleteUser(usuarioId);
  }

  async updateUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    // [UPDATE] quando CRUD de conquistas tiver pronto a gente coloca aqui
    const { id, nome } = usuario;

    const newUsuario = await this.repositorioUsuario.updateUser(id, nome);

    return { usuario: newUsuario };
  }
}
