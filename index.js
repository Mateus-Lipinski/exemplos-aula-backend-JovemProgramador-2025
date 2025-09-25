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
import { exercicio1_1, exercicio1_2, exercicio2_1, exercicio2_2, exercicio3_1, exercicio3_2, exercicio4_1, exercicio4_2, exercicio5_1, exercicio5_2} from "./controllers/exerciciosGet.js";
import { exemploPost, exercicio2, exercicio3, exercicio4, exercicio5 } from "./controllers/exerciciosPost.js";

// Inicializando a API com o 'express'
const app = express();
// Para fazer funcionar o método Post
app.use(express.json())

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

// Tentativa de fazer os exercicios (1 até 5) (Com método Get) ----------
// Exercicios 1 até 5 (params) --Forma 1 --------------------------------
app.get('/exercicio1/:num1/:num2', exercicio1_1)
app.get('/exercicio2/:valorHora/:horasTrabalhadas', exercicio2_1)
app.get('/exercicio3/:peso1/:peso2/:peso3/:peso4/:peso5', exercicio3_1)
app.get('/exercicio4/:celsius', exercicio4_1)
app.get('/exercicio5/:milhas', exercicio5_1)
//-----------------------------------------------------------------------
// Exercicios 1 até 5 (query) --Forma 2 ---------------------------------
app.get('/exercicio1/', exercicio1_2)
app.get('/exercicio2/', exercicio2_2)
app.get('/exercicio3/', exercicio3_2)
app.get('/exercicio4/', exercicio4_2)
app.get('/exercicio5/', exercicio5_2)

//Exemplo de Post
app.post('/exemploPost/', exemploPost)

// Exercicios Post (2 até 5) (Com método Get) ----------
app.post('/exercicio2Post/', exercicio2)
app.post('/exercicio3Post/', exercicio3)
app.post('/exercicio4Post/', exercicio4)
app.post('/exercicio5Post/', exercicio5)

// Inicialização do servidor em determinada porta do seu computador
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})