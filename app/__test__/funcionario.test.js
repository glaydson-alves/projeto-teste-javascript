const funcionario = require("../funcionario")

test("salario será verdadeiro paao ser igual a um valor passado",()=>{
    expect(funcionario.getSalario()).toBe(1320) //espera que o resultado seja verdadeiro
})