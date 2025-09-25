import { conversaoPost, kmPost, mediaPesosPost, salarioPost, somarPost } from "../services/exerciciosPost.js"

// Exemplo Post -Exercicio 1 (soma de dois números) --Post
export const exemploPost = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const somaDaMaldade = somarPost(num1, num2)

    res.send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
}

// Exercicio 2
export const exercicio2 = (req, res) => {
    const valorHora = parseInt(req.body.valorHora)
    const horasTrabalhadas = parseInt(req.body.horasTrabalhadas)

    const valorTotal = salarioPost(valorHora, horasTrabalhadas)

    res.send(`Você irá receber no final do mês: R$${valorTotal} (Valor Hora: ${valorHora} / Horas Trabalhadas ${horasTrabalhadas})`)
}

// Exercicio 3
export const exercicio3 = (req, res) => {
    const peso1 = parseFloat(req.body.peso1)
    const peso2 = parseFloat(req.body.peso2)
    const peso3 = parseFloat(req.body.peso3)
    const peso4 = parseFloat(req.body.peso4)
    const peso5 = parseFloat(req.body.peso5)

    const mediaTotal = mediaPesosPost(peso1, peso2, peso3, peso4, peso5)

    res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
}

// Exercicio 4
export const exercicio4 = (req, res) => {
    const celsius = parseFloat(req.body.celsius)

    const convercao = conversaoPost(celsius)

    res.send(`O resultado da converção ficou em: ${convercao}ºF`)
}

// Exercicio 5
export const exercicio5 = (req, res) => {
    const milhas = parseFloat(req.body.milhas)

    const resultadoConversao = kmPost(milhas)

    res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${resultadoConversao}km`)
}