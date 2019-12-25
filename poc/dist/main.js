"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const swagger_documentation_1 = require("./swagger/swagger.documentation");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_documentation_1.options);
    swagger_1.SwaggerModule.setup('swagger/readme', app, document);
    await app.listen(3300);
}
bootstrap();
//# sourceMappingURL=main.js.map