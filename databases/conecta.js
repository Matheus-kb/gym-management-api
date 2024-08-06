import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "academia", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});