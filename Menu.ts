import readline from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {
    let opcao: number;

    const conta: Conta = new Conta(1, 123, 1, "Samuel", 14000);
    conta.visualizar();
    conta.sacar(14500);
    conta.visualizar();
    conta.depositar(450);
    conta.visualizar();

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow,
            "\n *****************************************************\n",
            "*************** BANCO DO BRAZIL COM Z ***************\n",
            "*****************************************************\n",
            "*            1 - Criar conta                        *\n",
            "*            2 - Listar todas as Contas             *\n",
            "*            3 - Buscar Conta por Número            *\n",
            "*            4 - Atualizar Dados da Conta           *\n",
            "*            5 - Apagar Conta                       *\n",
            "*            6 - Sacar                              *\n",
            "*            7 - Depositar                          *\n",
            "*            8 - Transferir valores entre Contas    *\n",
            "*            9 - Sair                               *\n",
            "*****************************************************\n",
        colors.reset)
        opcao = readline.questionInt(" Entre com a opção desejada: ");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            // console.clear();
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n Criar Conta");
                break;

            case 2:
                console.log("\n Listar todas as Contas\n");
                break;

            case 3:
                console.log("\n Consultar dados da Conta - por número\n");
                break;
            
            case 4:
                console.log("\n Atualizar dados da Conta\n");
                break;

            case 5:
                console.log("\n Apagar uma conta\n");
                break;

            case 6:
                console.log("\n Saque\n");
                break;

            case 7:
                console.log("\n Depósito\n");
                break;

            case 8:
                console.log("\n Transferência entre Contas\n");
                break;
            
            default:
                console.log("\n Opção Inválida\n");
                break;
        }
    }
}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.green,
        "*****************************************************\n",
        "*     Projeto Desenvolvido por: Samuel de Souza     *\n",
        "*   Generation Brasil - generation@generation.org   *\n",
        "*           github.com/conteudoGeneration           *\n",
        "*****************************************************\n",
    colors.reset);
}

main()