import { sequelize } from '../databases/conecta.js'

import { Treino } from '../models/Treino.js'
import { Aluno } from '../models/Aluno.js'
import { Profissional } from '../models/Profissional.js'

export const treinoIndex = async (req, res) => {

  try {
    const treinos = await Treino.findAll({
      include: [Aluno, Profissional]
    });
    res.status(200).json(treinos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const treinoCreate = async (req, res) => {
  const { aluno_id, profissional_id, descricao, data, hora } = req.body

  if (!aluno_id || !profissional_id || !descricao || !data || !hora) {
    res.status(400).json({ id: 0, msg: "Erro... Informe os dados" })
    return
  }

  const t = await sequelize.transaction();

  try {

    const treino = await Treino.create({
      aluno_id, profissional_id, descricao, data, hora
    }, { transaction: t });

    await Aluno.increment('n_treinos',
      { by: 1, where: { id: aluno_id }, transaction: t }
    );

    await t.commit();
    res.status(201).json(treino)

  } catch (error) {
    await t.rollback();
    res.status(400).json({"id": 0, "Erro": error})
  }
}

export const treinoDelete = async (req, res) => {
  const treino_id = req.body.treino_id;

  if (!treino_id) {
    return res.status(400).json({ error: 'Informe o ID do treino a ser excluído.' });
  }

  const t = await sequelize.transaction();

  try {
    const treino = await Treino.findByPk(treino_id);

    if (!treino) {
      return res.status(404).json({ error: 'Treino não encontrado.' });
    }

    const aluno_id = treino.aluno_id;

    await Treino.destroy({ where: { id: treino_id }, transaction: t });
    await Aluno.increment('n_treinos', { by: -1, where: { id: aluno_id }, transaction: t });
    await t.commit();

    res.status(200).json({ message: 'Treino excluído com sucesso.' });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: 'Erro ao excluir o treino.' });
  }
}