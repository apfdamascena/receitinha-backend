import { CadastrarUsuarioControlador } from "@controladores";
import { CadastroUsuario } from "@usuario";
import { Router } from "express";
import { Fachada } from "src/fachada";

// const cadastroUsuario = new CadastroUsuario()
// const cadastrarUsuarioControlador = new CadastrarUsuarioControlador(new CadastroUsuario())
// const fachada = new Fachada()

const router = Router()


router.route("/usuario")