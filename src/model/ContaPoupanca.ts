import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    // Atributos
    private _aniversario: number;
    
    // Contructor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    // Getters and Setters
    public get aniversario() {
        return this._aniversario;
    }

    public set aniversario(aniversario: number) {
        this.aniversario = aniversario;
    }

    // Metodos
    public visualizar(): void {
        super.visualizar();
        console.log(`Dia de aniversário: ${this._aniversario}`);
    }
}