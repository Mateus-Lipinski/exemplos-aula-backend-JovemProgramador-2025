// Exemplo Post -Exercicio 1 (soma de dois números) --Post
export const exemploPost = (req, res) => {
    const num1 = req.body.num1
    const num2 = req.body.num2

    const somaDaMaldade = num1 + num2

    res.send(`Resultado dessa soma: ${num1} + ${num2} = ${somaDaMaldade}`)
}