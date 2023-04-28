"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const appstart = await core_1.NestFactory.create(app_module_1.AppModule);
    appstart.useGlobalPipes(new common_1.ValidationPipe());
    appstart.enableCors({
        origin: ['http://webprog.io', 'https://www.test-cors.org/'],
        methods: 'GET,POST'
    });
    appstart.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Register and Login API")
        .setDescription("The Register and Login API description")
        .setVersion("1.0")
        .addTag("Amir.ns")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(appstart, config);
    swagger_1.SwaggerModule.setup("api", appstart, document);
    await appstart.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map