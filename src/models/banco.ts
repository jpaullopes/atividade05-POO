import { Cliente } from "./cliente";
import { Conta } from "./conta";

export class Banco{
    private contas : Conta[];
    private clientes : Cliente[];

    constructor(contas: Conta[] = [], clientes: Cliente[] = []) {
        this.contas = [];
        this.clientes = [];
    }

    public consultarConta(numero: string): Conta {
        let contaProcurada = new Conta();
        for (let conta of this.contas) {
            if (conta.getNumero() == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }

    //ERRO ESTÁ AQUI
    public consultarCliente(cpf: string): Cliente{
        let clienteProcurado  = new Cliente(); // O ponto de exclamação é para dizer que a variável não é nula
        for(let cliente of this.clientes){
            if(cliente.getCpf() == cpf){
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);

        // verificando se o cliente possui a conta e que ela não pode ser adicionada novamente
        if (!clienteProcurado.getContas().some(conta => conta == contaProcurada)) { //tive que apelar para o some
            clienteProcurado.getContas().push(contaProcurada);
        }
    }

    public listarContasCliente(cpf: string): Conta[]{
        let clienteProcurado = this.consultarCliente(cpf);
        return clienteProcurado.getContas();
    }

    public totalizarSaldoCliente(cpf: string): number{
        let clienteProcurado = this.consultarCliente(cpf);
        let contasCliente = clienteProcurado.getContas();
        let saldoTotal = 0;

        for(let conta of contasCliente){
            saldoTotal += conta.consultarSaldo();
        }
        return saldoTotal;
    }

    public inserirCliente(cliente: Cliente): void{
        for(let verificadorCliente of this.clientes){
            if(verificadorCliente.getCpf() == cliente.getCpf() ||
                verificadorCliente.getId() == cliente.getId()){
                    return; // Se o cliente já existir, não insere
                }
        }
        this.clientes.push(cliente);
    }

    public inserirConta(conta: Conta): void{
        for(let verificadorConta of this.contas){
            if(verificadorConta.getNumero() == conta.getNumero() ||
                verificadorConta.getId() == conta.getId()){
                return; // Se a conta já existir, não insere
            }
        }
        this.contas.push(conta);
    }

    public getClientes(): Cliente[]{
        return this.clientes;
    }

    public getContas(): Conta[]{
        return this.contas;
    }
}