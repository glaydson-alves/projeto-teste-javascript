function freteGratis(valor){
    if (valor > 0) {
        return valor >= 150
    } else {
        return valor
    }
}

module.exports = freteGratis // exportando a função como um módulodo node.js
