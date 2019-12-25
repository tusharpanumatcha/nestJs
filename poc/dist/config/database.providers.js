"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const task_entity_1 = require("../tasks/task.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
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
            sequelize.addModels([task_entity_1.task]);
            await sequelize.sync();
            await sequelize.authenticate().then(() => {
                console.log('SuccessFull connected');
            }).catch(err => {
                console.log('connection error' + err);
            });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map