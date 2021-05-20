import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

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
