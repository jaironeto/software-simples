import { default as Input } from './input.js';
export default class Opcoes extends Input {
    inicial() {
        console.clear();
        console.log("Escolha uma das opções de login".padStart(40, " ").concat('\n'));
        console.log("usuario");
        console.log("funcionario".concat('\n'));
    }
    login(value) {
        console.clear();
        console.log("Digite seu email e senha de acesso do ".padStart(40, " ").concat(`${value}\n`));
    }
    vericar(value, person) {
        if (value) {
            if (person === null) {
                throw 'ocorreu um erro inesperado!';
            }
            console.clear();
            console.log(`Verificando conta: ${person}`.padStart(40, " ").concat('\n'));
        }
        else {
            console.clear();
            console.log('Nenhum usuario encontrado'.padStart(40, " ").concat('\n'));
            console.log('%s', 'Deseja se cadastrar? SIM/NAO');
        }
    }
}
