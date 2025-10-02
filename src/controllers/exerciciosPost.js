import ServiceExercicio from "../services/exerciciosPost.js"

class ControllerExercicio {
    // Exemplo Post -Exercicio 1 (soma de dois números) --Post
    ExemploPost(req, res) {
        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const somaDaMaldade = ServiceExercicio.SomarPost(num1, num2)

            res.status(200).send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
        } catch (error) {
            res.status(500).send({
                msg: error.message,
                data: null,
                error: true
            })
        }
    }

    // Exercicio 2
    Exercicio2 = (req, res) => {
        const valorHora = parseInt(req.body.valorHora)
        const horasTrabalhadas = parseInt(req.body.horasTrabalhadas)

        const valorTotal = ServiceExercicio.SalarioPost(valorHora, horasTrabalhadas)

        res.send(`Você irá receber no final do mês: R$${valorTotal} (Valor Hora: ${valorHora} / Horas Trabalhadas ${horasTrabalhadas})`)
    }

    // Exercicio 3
    Exercicio3 = (req, res) => {
        const peso1 = parseFloat(req.body.peso1)
        const peso2 = parseFloat(req.body.peso2)
        const peso3 = parseFloat(req.body.peso3)
        const peso4 = parseFloat(req.body.peso4)
        const peso5 = parseFloat(req.body.peso5)

        const mediaTotal = ServiceExercicio.MediaPesosPost(peso1, peso2, peso3, peso4, peso5)

        res.send(`Média dos pesos ficou: ${mediaTotal} (Peso Nº1: ${peso1}; Peso Nº2: ${peso2}; Peso Nº3: ${peso3}; Peso Nº4: ${peso4}; Peso Nº5: ${peso5})`)
    }

    // Exercicio 4
    Exercicio4 = (req, res) => {
        const celsius = parseFloat(req.body.celsius)

        const convercao = ServiceExercicio.ConversaoPost(celsius)

        res.send(`O resultado da converção ficou em: ${convercao}ºF`)
    }

    // Exercicio 5
    Exercicio5 = (req, res) => {
        const milhas = parseFloat(req.body.milhas)

        const resultadoConversao = ServiceExercicio.KmPost(milhas)

        res.send(`O resultado da converção de Milhas para Quilômetros ficou em: ${resultadoConversao}km`)
    }
}

export default new ControllerExercicio() 