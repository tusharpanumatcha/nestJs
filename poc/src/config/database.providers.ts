import { Sequelize } from 'sequelize-typescript';
import { task } from 'src/tasks/task.entity';
// import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Password@123',
        database: 'nest',
        define: {
          timestamps: false
        }
      });
      sequelize.addModels([task]);
      await sequelize.sync();
      await sequelize.authenticate().then(()=> {
        console.log('SuccessFull connected');
      }).catch(err => {
        console.log('connection error' + err)
      });
      return sequelize;
    },
  },
];

