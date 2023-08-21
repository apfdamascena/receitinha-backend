import { ITokenProvider } from "@providers";
import { compare, genSaltSync, hashSync } from "bcryptjs";
import { ILoginResponse } from "src/login/ILoginRequestDTO";

import { ICadastroUsuarioResponse } from "./CadastroUsuarioDTO";
import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";

export class CadastroUsuario {
  constructor(
    private repositorioUsuario: IRepositorioUsuario,
    private tokenProvider: ITokenProvider
  ) {}

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

  async autenticaUsuario(usuario: Usuario): Promise<ILoginResponse> {
    const { email, senha } = usuario;

    if (!senha) throw new Error("sem senha");

    const foundUser = await this.repositorioUsuario.findByEmail(email);

    if (!foundUser) throw new Error("Erro nas credenciais");

    const { senha: senhasUsuarioEncontrado } = foundUser;

    const isPasswordMatch = await compare(
      senha,
      senhasUsuarioEncontrado || "-1"
    );

    if (!isPasswordMatch) throw new Error("Erro nas credenciais");

    const token = this.tokenProvider.create(foundUser.id);
    return { token };
  }
}
