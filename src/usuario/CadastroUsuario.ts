import { genSaltSync, hashSync } from "bcryptjs";
import { IRepositorioUsuario } from "./IRepositorioUsuario";
import { Usuario } from "./Usuario";
import { ICadastroUsuarioRequest, ICadastroUsuarioResponse } from "./CadastroUsuarioDTO";


export class CadastroUsuario {

    constructor(private repositorioUsuario: IRepositorioUsuario){}

    async cadastrarUsuario(input: ICadastroUsuarioRequest): Promise<ICadastroUsuarioResponse> {
        const { email, nome, senha } = input;
        
        const isUsuarioAlreadyExists = await this.repositorioUsuario.findByEmail(email);

        if(isUsuarioAlreadyExists) throw new Error("Usuario já existe");

        const novoUsuario = new Usuario({
            nome,
            email,
            senha: hashSync(senha, genSaltSync(10)),
            conquistas: []
        });

        const usuario = await this.repositorioUsuario.save(novoUsuario);
        delete usuario.senha;

        return { usuario }
    }
}