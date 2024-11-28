import { Conta } from "./conta";

export class Cliente{
    private id : number;
    private nome : string;
    private cpf : string;
    private dataNascimento : Date;
    private contas : Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }

    public getCpf() : string{
        return this.cpf;
    }

    public getContas() : Conta[]{
        return this.contas;
    }

    public getId() : number{    
        return this.id;
    }

    public getNome() : string {
        return this.nome;
    }

    public getDataNascimento() : Date {
        return this.dataNascimento;
    }
}