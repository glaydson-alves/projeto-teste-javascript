const funcionario = {
    nome : "joão",
    idade : 25,
    salario: 1320,

    getSalario(){
        return this.salario
    },
    setSalario(valor){
        if (valor <=0){
            return false
        }else{
            this.salario = valor
            return true
        }
    }
}

module.exports = funcionario