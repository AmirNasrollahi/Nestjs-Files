import { NestFactory } from "@nestjs/core";
// import { mymodule } from "./my.module";
// import { TodolistModule } from "./todolist/todolist.module";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";

async function bootstrap() {
  const appstart = await NestFactory.create(AppModule);
  appstart.useGlobalPipes(new ValidationPipe());

  appstart.enableCors({
    origin:['http://webprog.io','https://www.test-cors.org/'],
    methods:'GET,POST'
  })

  appstart.enableVersioning({
    type:VersioningType.URI,
  })

  const config = new DocumentBuilder()
    .setTitle("Register and Login API")
    .setDescription("The Register and Login API description")
    .setVersion("1.0")
    .addTag("Amir.ns")
    .build();
  const document = SwaggerModule.createDocument(appstart, config);
  SwaggerModule.setup("api", appstart, document);
  await appstart.listen(3000);
}

bootstrap();
