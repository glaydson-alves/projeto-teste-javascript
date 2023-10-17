const freteGratis = require("../desconto")


test("salario será verdadeiro para valores maior ou igual a 1320",()=>{
    expect(freteGratis(200)).toBeTruthy() //espera que o resultado seja verdadeiro
})

test("frete será verdadeiro para valores menor ou igual a 0", ()=>{
    expect(freteGratis(-0)).toBeLessThanOrEqual(0) // testando o else
})

//comando para o terminal "npm run test [desconto.test.js] nome do arquivo entre chaves"