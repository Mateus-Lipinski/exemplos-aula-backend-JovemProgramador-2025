class ServiceExercicio {
    // Exemplo Post -Exercicio 1 (soma de dois números) --Post
    SomarPost(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Favor aceitamos apenas números")
        }

        const result = (num1 * 100) + (num2 * 100)

        return result / 100;
    }

    SalarioPost(valorHora, horasTrabalhadas) {

        const result = (valorHora * 100) * (horasTrabalhadas * 100)

        return result / 10000
    }

    MediaPesosPost(peso1, peso2, peso3, peso4, peso5) {
        return (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    }

    ConversaoPost(celsius) {
        return (9 * celsius + 160) / 5;
    }

    KmPost(milhas) {
        return milhas * 1.60934;
    }
}

export default new ServiceExercicio()