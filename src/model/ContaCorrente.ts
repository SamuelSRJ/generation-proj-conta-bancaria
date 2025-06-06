import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    // Atributos
    private _limite: number;

    // Constructor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite:number){
        super(numero, agencia, tipo, titular, saldo)
        this._limite = limite;
    }

    // Getters and Setters
    public get limite(): number{
        return this._limite;
    }

    public set limite(limite: number) {
        this.limite = limite;
    }

    // Metodos
    public sacar(valor: number): boolean {
        if((this.saldo + this._limite) < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this.saldo = this.saldo - valor;
        return true;
    }

    public visualizar(): void{
        super.visualizar();
        console.log(`* Limite: ${this._limite.toFixed(2)}`);
    }

}