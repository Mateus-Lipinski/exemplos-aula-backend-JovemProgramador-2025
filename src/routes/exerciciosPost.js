import express from "express"
import ControllerExercicio from "../controllers/exerciciosPost.js"

const router = express.Router()

//Exemplo de Post
router.post('/exemploPost/', ControllerExercicio.ExemploPost)

// Exercicios Post (2 até 5) (Com método Get) ----------
router.post('/exercicio2Post/', ControllerExercicio.Exercicio2)
router.post('/exercicio3Post/', ControllerExercicio.Exercicio3)
router.post('/exercicio4Post/', ControllerExercicio.Exercicio4)
router.post('/exercicio5Post/', ControllerExercicio.Exercicio5)

export default router