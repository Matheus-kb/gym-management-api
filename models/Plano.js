import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Plano = sequelize.define('plano', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9,2),
    allowNull: false
  }
});



// INSERT INTO planos (descricao, preco, createdAt, updatedAt) VALUES ('Plano A', 49.99, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO planos (descricao, preco, createdAt, updatedAt) VALUES ('Plano B', 79.99, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO planos (descricao, preco, createdAt, updatedAt) VALUES ('Plano C', 99.99, '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO planos (descricao, preco, createdAt, updatedAt) VALUES ('Plano D', 129.99, '2023-10-27 10:00:00', '2023-10-27 10:00:00');


// INSERT INTO profissionais (nome, especialidade, createdAt, updatedAt) VALUES ('Profissional 1', 'Especialidade 1', '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO profissionais (nome, especialidade, createdAt, updatedAt) VALUES ('Profissional 2', 'Especialidade 2', '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO profissionais (nome, especialidade, createdAt, updatedAt) VALUES ('Profissional 3', 'Especialidade 3', '2023-10-27 10:00:00', '2023-10-27 10:00:00');
// INSERT INTO profissionais (nome, especialidade, createdAt, updatedAt) VALUES ('Profissional 4', 'Especialidade 4', '2023-10-27 10:00:00', '2023-10-27 10:00:00');

