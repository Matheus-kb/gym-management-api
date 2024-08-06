import { Router } from "express"
import { alunoCreate, alunoIndex } from "./controllers/alunoController.js"
import { treinoIndex, treinoCreate, treinoDelete } from "./controllers/treinoController.js"


const router = Router()

router.get('/aluno', alunoIndex)
      .post('/aluno', alunoCreate)

router.get('/treino', treinoIndex)
      .post('/treino', treinoCreate)
      .delete('/treino', treinoDelete)

export default router