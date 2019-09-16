export class Cliente {
    idCliente:Number;
    cpfCliente:String;
    password:String;
    nomeCliente:String;

    formataCpf(){
        let cpf = this.cpfCliente.split(".")
        let aux = cpf[2].split("-")
        let cpf3 = cpf[0] + cpf[1] + aux[0] + aux[1]
        return cpf3
    }
}
