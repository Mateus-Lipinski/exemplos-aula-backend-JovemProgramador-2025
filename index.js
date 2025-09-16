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
// Exercicio 1 --Forma 1
app.get('/exercicio1/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    const somaDaMaldade = num1 + num2

    res.send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
})
//Exercicio 1 --Forma 2
app.get('/exercicio1/', (req, res) => {
    const num1 = parseFloat(req.query.num1)
    const num2 = parseFloat(req.query.num2)

    const somaDaMaldade = num1 + num2

    res.send(`Resultado desse cálculo: ${num1} + ${num2} = ${somaDaMaldade}`)
})

// Inicialização do servidor em determinada porta do seu computador
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})