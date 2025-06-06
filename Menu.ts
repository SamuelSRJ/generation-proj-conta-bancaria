import readline from "readline-sync";
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    
    // Instância da Classe ContaController
    let contas: ContaController = new ContaController();
    
    // Variáveis Auxiliares
    let opcao: number, numero: number, agencia: number, tipo: number, saldo: number, limite: number, aniversario: number, numeroDestino: number, valor: number;
    let titular: string;
    const tiposContas = ["Conta Corrente", "Conta Poupança"];

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

                agencia = readline.questionInt("Digite o Número da agência: ");
                titular = readline.question("Digite o Nome do Titular da conta: ");
                tipo = readline.keyInSelect(tiposContas, "", {cancel: false}) + 1;
                saldo = readline.questionFloat("Digite o Saldo da conta (R$): ");
                
                switch (tipo) {
                    case 1:
                        limite = readline.questionFloat("Digite o limite da Conta (R$): ");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break;
                
                    case 2:
                        aniversario = readline.questionInt("Digite o Dia do aniversário da Conta Poupança: ");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                break;

            case 2:
                console.log("\n Listar todas as Contas\n");
                contas.listarTodas();
                break;

            case 3:
                console.log("\n Consultar dados da Conta - por número\n");
                numero = readline.questionInt("Digite o número da Conta: ");
                contas.procurarPorNumero(numero);

                break;
            
            case 4:
                console.log("\n Atualizar dados da Conta\n");

                numero = readline.questionInt("Digite o número da Conta: ");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {
                    agencia = readline.questionInt("Digite o Número da Agência: ");
                    titular = readline.question("Digite o Nome do Titular da conta: ");
                    tipo = conta.tipo;

                    saldo = readline.questionFloat("\nDigite o Saldo da conta (R$): ");

                    switch (tipo) {
                        case 1:
                            limite = readline.questionFloat("Digite o limite da Conta (R$): ");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            );
                            break;
                    
                        case 2:
                            aniversario = readline.questionInt("Digite o Dia de aniversário da Conta Poupança: ");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            );
                            break;
                    }
                } else {
                    console.log(`\nA Conta numero ${numero} não foi encontrada!`);
                }

                break;

            case 5:
                console.log("\n Apagar uma conta\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                contas.deletar(numero);

                break;

            case 6:
                console.log("\n Saque\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                valor = readline.questionFloat("\nDigite o valor do Saque (R$):");
                contas.sacar(numero, valor);

                break;

            case 7:
                console.log("\n Depósito\n");

                numero = readline.questionInt("Digite o número da Conta: ");
                valor = readline.questionFloat("Digite o valor do Depósito (R$): ");

                contas.depositar(numero, valor);

                break;

            case 8:
                console.log("\n Transferência entre Contas\n");

                numero = readline.questionInt("Digite o número da Conta de Origem: ");
                numeroDestino = readline.questionInt("Digite o número da Conta de Destino: ");
                valor = readline.questionFloat("\nDigite o valor do Depósito (R$): ");

                contas.transferir(numero, numeroDestino, valor);

                break;
            
            default:
                console.log("\n Opção Inválida\n");
                break;
        }
    }
}

export function sobre(): void {
    console.clear();
    console.log(colors.bg.black, colors.fg.green +
        "*****************************************************\n",
        "*     Projeto Desenvolvido por: Samuel de Souza     *\n",
        "*       E-mail: samuelsouzarosajr@gmail.com         *\n",
        "*               github.com/SamuelSRJ                *\n",
        "*****************************************************\n",
    colors.reset);
}

main()
