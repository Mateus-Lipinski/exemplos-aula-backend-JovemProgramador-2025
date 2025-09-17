// 'const' é imutavél
// 'let' é mutavél 

// const numero =10;
// let outronumero = 20;

// if (1 == 1) {
//     outronumero = 29;
//     console.log(outronumero);
// }

// console.log('Hello World! :v')

import express from "express"

// Inicializando a API com o 'express'
const app = express();

// req= request / res=response
app.get('/api/pessoa/:id', (req, res) => {
    // Query params:
    // Inicializa na URL depois do '?'
    // localhost:3000/api/pessoa/30?nome=joao&idade=10&cidade=joinville&status=dead
    // ?idade=10
    const nome = req.query.nome
    res.status(200).send("Hello! " + nome)

    console.log(req.params)
})


// Tentativa de fazer os exercicios (1 até 5)
// Exercicio 1 --Forma 1 (params)
app.get('/exercicio1/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    const somaDaMaldade = num1 + num2

    res.send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
})
//Exercicio 1 --Forma 2 (query)
app.get('/exercicio1/', (req, res) => {
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const somaDaMaldade = num1 + num2

    res.send(`Resultado desse cálculo: ${num1} + ${num2} = ${somaDaMaldade}`)
})

//Exercicio 2 --Forma 1 (params)
app.get('/exercicio2/:valorHora/:horasTrabalhadas', (req, res) => {
    const valorHora = parseInt(req.params.valorHora)
    const horasTrabalhadas = parseInt(req.params.horasTrabalhadas)

    const valorTotal = valorHora * horasTrabalhadas

    res.send(`Você irá receber no final do mês: R$${valorTotal} (Valor Hora: ${valorHora} / Horas Trabalhadas: ${horasTrabalhadas})`)
})

//Exercicio 2 --Forma 2 (query)
app.get('/exercicio2/', (req, res) => {
    const valorHora = parseInt(req.query.valorHora)
    const horasTrabalhadas =parseInt(req.query.horasTrabalhadas)

    const salario = valorHora * horasTrabalhadas

    res.send(`Você irá receber no final do mês: R$${salario} (Valor Hora: R$${valorHora} / Horas Trabalhadas: ${horasTrabalhadas} horas)`)
})

//Exercicio 3 --Forma 1 (params)
app.get('/exercicio3/:peso1/:peso2/:peso3/:peso4/:peso5', (req, res) => {
    const peso1 = parseFloat(req.params.peso1)
    const peso2 = parseFloat(req.params.peso2)
    const peso3 = parseFloat(req.params.peso3)
    const peso4 = parseFloat(req.params.peso4)
    const peso5 = parseFloat(req.params.peso5)

    const mediaTotal = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

    res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
})

//Exercicio 3 --Forma 2 (query)
app.get('/exercicio3/', (req, res) => {
    const peso1 = parseFloat(req.query.peso1)
    const peso2 = parseFloat(req.query.peso2)
    const peso3 = parseFloat(req.query.peso3)
    const peso4 = parseFloat(req.query.peso4)
    const peso5 = parseFloat(req.query.peso5)

    const mediaTotal = (peso1 + peso2 + peso3 + peso4 + peso5) / 5

    res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
})

//Exercicio 4 --Forma 1 (params)
app.get('/exercicio4/:celsius', (req, res) => {
    const celsius = parseFloat(req.params.celsius)

    const convercao = (9 * celsius + 160) / 5

    res.send(`O resultado da converção ficou em: ${convercao}ºF`)
})

//Exercicio 4 --Forma 2 (query)
app.get('/exercicio4/', (req, res) => {
    const celsius = parseFloat(req.query.celsius)

    const convercao = (9 * celsius + 160) / 5

    res.send(`O resultado da converção ficou em: ${convercao}ºF`)
})

//Exercicio 5 --Forma 1 (params)
app.get('/exercicio5/:milhas', (req, res) => {
    const milhas = parseFloat(req.params.milhas)

    const km = milhas * 1.60934

    res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${km}km`)
})

//Exercicio 5 --Forma 2 (query)
app.get('/exercicio5/', (req, res) => {
    const milhas = parseFloat(req.query.milhas)

    const km = milhas * 1.60934

    res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${km}km`)
})

// Inicialização do servidor em determinada porta do seu computador
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})