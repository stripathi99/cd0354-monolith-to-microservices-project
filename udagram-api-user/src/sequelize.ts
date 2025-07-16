import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';
import { Dialect } from 'sequelize';

export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect as Dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  'storage': ':memory:',
});
