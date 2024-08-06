import { Aluno } from '../models/Aluno.js'
import { Plano } from '../models/Plano.js'

export const alunoIndex = async (req, res) => {
  try {
    const alunos = await Aluno.findAll({
      include: Plano
    });
    res.status(200).json(alunos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const alunoCreate = async (req, res) => {
  const { nome, fone, objetivo, plano_id } = req.body

  if (!nome || !fone || !objetivo || !plano_id) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  try {
    const aluno = await Aluno.create({
      nome, fone, objetivo, plano_id
    });
    res.status(201).json(aluno)
  } catch (error) {
    res.status(400).send(error)
  }
}
