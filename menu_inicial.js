import { default as Opcoes } from './opcoes.js';
import { Usuario, Funcionario } from './database/table.js';
export default class Menu_inicial extends Opcoes {
    async escolha(valor, resul = '', index = 1) {
        while (true) {
            if (resul.toLowerCase() === "usuario" || resul.toLowerCase() === "funcionario") {
                break;
            }
            else {
                super.inicial();
                resul = (index % 3) ? await super.input("Digite uma das opção valida: ") : await super.input("Digite uma das opções (usuario/funcionario): ");
                (index === 3) ? index = 1 : index++;
            }
        }
        label: while (valor === 'start') {
            switch (resul) {
                case 'usuario':
                    const usuario = await this.usuarioORusuario('usuario');
                    if (usuario === undefined) {
                        await this.escolha('start');
                    }
                    else {
                        break label;
                    }
                case 'funcionario':
                    const funcionario = await this.usuarioORusuario('funcionario');
                    if (funcionario === undefined) {
                        await this.escolha('start');
                    }
                    else {
                        break label;
                    }
                default:
                    throw new Error('ocorreu um erro inesperado');
            }
        }
        return valor;
    }
    async usuarioORusuario(value, loop = true) {
        super.login(value);
        const email = await super.input("Email: ");
        const senha = await super.input("Senha: ");
        const verificar = (value === 'usuario') ? await Usuario.findOne({ where: { user: email } }) : await Funcionario.findOne({ where: { user: email } });
        var database;
        label: while (loop) {
            switch (await this.cadastro(verificar)) {
                case "sim":
                    let tipo;
                    (value === 'usuario') ? tipo = Usuario : tipo = Funcionario;
                    database = await tipo.findOrCreate({ where: { user: email, senha: senha } });
                    break label;
                case "nao":
                    break label;
                case "loop":
                    break;
            }
        }
        return database ? { opcao: value, client: database[0].user } : undefined;
    }
    async cadastro(value) {
        if (value !== null) {
            super.vericar(!!value, value.user);
            return new Promise(function (resolve) {
                setTimeout(resolve, 5000, 'sim');
            });
        }
        else {
            super.vericar(!!value);
            const input = await super.input();
            return new Promise(function (resolve) {
                if (input.toLowerCase() === "sim") {
                    setTimeout(resolve, 5000, "sim");
                }
                else if (input.toLowerCase() === "nao") {
                    setTimeout(resolve, 5000, 'nao');
                }
                else {
                    resolve('loop');
                }
            });
        }
    }
}
