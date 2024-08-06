import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Plano } from './Plano.js'

export const Aluno = sequelize.define('aluno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  fone: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  objetivo: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  n_treinos: {
    type: DataTypes.INTEGER(4),
    defaultValue: 0
  }
});

Aluno.belongsTo(Plano, {
  foreignKey: {
    name: 'plano_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Plano.hasMany(Aluno, {
  foreignKey: 'plano_id'
})
