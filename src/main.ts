import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Compasso desafio tecnico')
    .setDescription("Descrição da API do desafio")
    .setVersion('1.0')
    .addTag('Desafio')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();


//TODO: Consultar cidade pelo nome
//TODO: Consultar cidade pelo estado
//TODO: Consultar cliente pelo nome
//TODO: Consultar cliente pelo Id
//TODO: Remover cliente
//TODO: Alterar o nome do cliente