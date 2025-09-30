// Exemplo Post -Exercicio 1 (soma de dois números) --Post
export function somarPost(num1, num2) {
    
    const result = (num1*100) + (num2*100)
    
    return result/100;
}

export function salarioPost(valorHora, horasTrabalhadas) {

    const result = (valorHora*100) * (horasTrabalhadas*100)

    return result/10000
}

export function mediaPesosPost(peso1, peso2, peso3, peso4, peso5) {
    return (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
}

export function conversaoPost(celsius) {
    return (9 * celsius + 160) / 5;
}

export function kmPost(milhas) {
    return milhas * 1.60934;
}