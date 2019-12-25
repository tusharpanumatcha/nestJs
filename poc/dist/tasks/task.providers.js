"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_entity_1 = require("./task.entity");
exports.taskProviders = [
    {
        provide: 'TASK_REPOSITORY',
        useValue: task_entity_1.task,
    },
];
//# sourceMappingURL=task.providers.js.map