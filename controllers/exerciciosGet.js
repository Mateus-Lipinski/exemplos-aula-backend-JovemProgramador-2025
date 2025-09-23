import { conversao, km, mediaPesos, salario, somar } from "../services/exerciciosGet.js"

// Exercicio 1 --Forma 1 (params)
export const exercicio1_1 = (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    const somaDaMaldade = somar(num1, num2)

    res.send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
}

//Exercicio 1 --Forma 2 (query)
export const exercicio1_2 = (req, res) => {
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const somaDaMaldade = somar(num1, num2)

    res.send(`Resultado desse cálculo: ${num1} + ${num2} = ${somaDaMaldade}`)
}

//Exercicio 2 --Forma 1 (params)
export const exercicio2_1 = (req, res) => {
    const valorHora = parseInt(req.params.valorHora)
    const horasTrabalhadas = parseInt(req.params.horasTrabalhadas)

    const valorTotal = salario(valorHora, horasTrabalhadas)

    res.send(`Você irá receber no final do mês: R$${valorTotal} (Valor Hora: ${valorHora} / Horas Trabalhadas: ${horasTrabalhadas})`)
}

//Exercicio 2 --Forma 2 (query)
export const exercicio2_2 = (req, res) => {
    const valorHora = parseInt(req.query.valorHora)
    const horasTrabalhadas = parseInt(req.query.horasTrabalhadas)

    const valorTotal = salario(valorHora, horasTrabalhadas)

    res.send(`Você irá receber no final do mês: R$${valorTotal} (Valor Hora: R$${valorHora} / Horas Trabalhadas: ${horasTrabalhadas} horas)`)
}

//Exercicio 3 --Forma 1 (params)
export const exercicio3_1 = (req, res) => {
    const peso1 = parseFloat(req.params.peso1)
    const peso2 = parseFloat(req.params.peso2)
    const peso3 = parseFloat(req.params.peso3)
    const peso4 = parseFloat(req.params.peso4)
    const peso5 = parseFloat(req.params.peso5)

    const mediaTotal = mediaPesos(peso1, peso2, peso3, peso4, peso5)

    res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
}

//Exercicio 3 --Forma 2 (query)
export const exercicio3_2 = (req, res) => {
    const peso1 = parseFloat(req.query.peso1)
    const peso2 = parseFloat(req.query.peso2)
    const peso3 = parseFloat(req.query.peso3)
    const peso4 = parseFloat(req.query.peso4)
    const peso5 = parseFloat(req.query.peso5)

    const mediaTotal = mediaPesos(peso1, peso2, peso3, peso4, peso5)

    res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
}

//Exercicio 4 --Forma 1 (params)
export const exercicio4_1 = (req, res) => {
    const celsius = parseFloat(req.params.celsius)

    const convercao = conversao(celsius)

    res.send(`O resultado da converção ficou em: ${convercao}ºF`)
}

//Exercicio 4 --Forma 2 (query)
export const exercicio4_2 = (req, res) => {
    const celsius = parseFloat(req.query.celsius)

    const convercao = conversao(celsius)

    res.send(`O resultado da converção ficou em: ${convercao}ºF`)
}

//Exercicio 5 --Forma 1 (params)
export const exercicio5_1 = (req, res) => {
    const milhas = parseFloat(req.params.milhas)

    const resultadoConversao = km(milhas)

    res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${resultadoConversao}km`)
}

//Exercicio 5 --Forma 2 (query)
export const exercicio5_2 = (req, res) => {
    const milhas = parseFloat(req.query.milhas)

    const resultadoConversao = km(milhas)

    res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${resultadoConversao}km`)
}