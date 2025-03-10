class Cliente{
    #cpf
    constructor(nome,cpf,endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf=cpf
    }

    getNomeCaixaAlta = ()=>{
        return this.nome.toUpperCase()
    }

    getNomeCaixaBaixa = ()=>{
        return this.nome.toLowerCase()
    }

    get getCpf(){
        return this.#cpf
    }
}

class Telefone{
    constructor(ddd,numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco{
    constructor(estado,cidade,rua,numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getEstadoCaixaAlta = ()=>{
        return this.estado.toUpperCase()
    }

    getEstadoCaixaBaixa = ()=>{
        return this.estado.toLowerCase()
    }

    getCidadeAlta = ()=>{
        return this.cidade.toUpperCase()
    }

    getCidadeCaixaBaixa = ()=>{
        return this.cidade.toLowerCase()
    }

    getRuaCaixaAlta = ()=>{
        return this.rua.toUpperCase()
    }

    getRuaCaixaBaixa = ()=>{
        return this.rua.toLowerCase()
    }

}

class Empresa{
    #cnpj
    constructor(razaoSocial,nomeFantasia,cnpj,endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    getNomeFantasiaCaixaAlta = ()=>{
        return this.nomeFantasia.toUpperCase()
    }

    getNomeFantasiaCaixaBaixa = ()=>{
        return this.nomeFantasia.toLowerCase()
    }

    getRazaoSocialCaixaAlta = ()=>{
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialCaixaBaixa = ()=>{
        return this.razaoSocial.toLowerCase()
    }

    get getCnpj(){
        return this.#cnpj
    }

    detalhe =() => {
        console.log(`Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n---------------------------------`);
    
        this.clientes.forEach((cliente) => {
            console.log(`\nNome: ${cliente.nome}\nEstado: ${cliente.endereco.estado} Cidade: ${cliente.endereco.cidade} Rua: ${cliente.endereco.rua} Número: ${cliente.endereco.numero}`);
            
            cliente.telefones.forEach((telefone) => {
                console.log(`DDD: ${telefone.ddd} Número: ${telefone.numero}`);
            });
        });
    };
    
}

export { Endereco, Empresa, Cliente, Telefone};
