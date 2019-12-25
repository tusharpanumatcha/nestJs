"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
exports.options = new swagger_1.DocumentBuilder()
    .setTitle('Nest JS POC')
    .setDescription('Knowledge and learning on Nest JS')
    .setVersion('1.0')
    .addTag('nest JS')
    .build();
//# sourceMappingURL=swagger.documentation.js.map