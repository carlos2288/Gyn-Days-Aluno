export default class User{
    constructor(login = "login", senha = "senha", nome = "nome",endereco = "endereco",contato = "contato",objetivo = "objetivo"){
        this.login = login
        this.senha = senha 
        this.nome = nome
        this.endereco = endereco
        this.contato = contato
        this.objetivo = objetivo
        this.orientador = ""
    }
}