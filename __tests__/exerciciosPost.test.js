import { describe, it, expect } from '@jest/globals'
import ServiceExercicio from '../src/services/exerciciosPost'

describe('Testando função somar', () => {

    it('Somando dois números positivos', () => {
        const resultado = ServiceExercicio.SomarPost(1, 2)

        expect(resultado).toBe(3)
    })

    it('Somando dois números negativos', () => {
        const resultado = ServiceExercicio.SomarPost(-1, -2)

        expect(resultado).toBe(-3)
    })

    it('Somando dois números com casa decimal', () => {
        const resultado = ServiceExercicio.SomarPost(1.2, 2.2)

        expect(resultado).toBe(3.4)
    })

    it('Somando zero com outro número', () => {
        const resultado = ServiceExercicio.SomarPost(0, 2)

        expect(resultado).toBe(2)
    })

    it('Somando um número com zero', () => {
        const resultado = ServiceExercicio.SomarPost(1, 0)

        expect(resultado).toBe(1)
    })
})

describe('Testando a função salário', () => {
    
    it('Multiplicar valores positivos', () => {
        const resultado = ServiceExercicio.SalarioPost(1, 5)

        expect(resultado).toBe(5)
    })

    it('Multiplicar valores negativos', () => {
        const resultado = ServiceExercicio.SalarioPost(-1, -5)

        expect(resultado).toBe(5)
    })

    it('Multiplicar um valor positivo e um valor negativo', () => {
        const resultado = ServiceExercicio.SalarioPost(1, -5)

        expect(resultado).toBe(-5)
    })

    it('Multiplicar um valor por zero', () => {
        const resultado = ServiceExercicio.SalarioPost(1, 0)

        expect(resultado).toBe(0)
    })

    it('Multiplicar valores decimais', () => {
        const resultado = ServiceExercicio.SalarioPost(1.5, 5.3)

        expect(resultado).toBe(7.95)
    })
})