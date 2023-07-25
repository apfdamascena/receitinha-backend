import { HttpStatus } from "@http";
import {
  CadastroUsuario,
  ICadastroUsuarioRequest,
  ICadastroUsuarioResponse,
  Usuario,
} from "@usuario";
import { NextFunction, Request, Response } from "express";
import { parseType } from "src/parseType";

export class CadastrarUsuarioControlador {
  constructor(private cadastroUsuario: CadastroUsuario) {}

  async cadastrarUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    const usuarioCriado = await this.cadastroUsuario.cadastrarUsuario(usuario);
    return usuarioCriado;
  }

  async readUsuario(idUsuario: string): Promise<ICadastroUsuarioResponse> {
    const usuario = await this.cadastroUsuario.readUsuario(idUsuario);
    return usuario;
  }

  async deleteUsuario(usuarioId: string): Promise<void> {
    await this.cadastroUsuario.deleteUsuario(usuarioId);
  }

  async updateUsuario(usuario: Usuario): Promise<ICadastroUsuarioResponse> {
    const newUsuario = await this.cadastroUsuario.updateUsuario(usuario);
    return newUsuario;
  }
}
