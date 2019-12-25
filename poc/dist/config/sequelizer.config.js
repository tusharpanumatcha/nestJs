"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
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
            });
            sequelize.addModels([__dirname + '/../**/*.entity.ts']);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=sequelizer.config.js.map