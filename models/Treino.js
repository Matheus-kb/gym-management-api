import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Aluno } from './Aluno.js';
import { Profissional } from './Profissional.js';

export const Treino = sequelize.define('treino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  }
});

Treino.belongsTo(Aluno, {
  foreignKey: {
    name: 'aluno_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Aluno.hasMany(Treino, {
  foreignKey: 'aluno_id'
})

Treino.belongsTo(Profissional, {
  foreignKey: {
    name: 'profissional_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Profissional.hasMany(Treino, {
  foreignKey: 'profissional_id'
})
