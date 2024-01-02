import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // const config = new DocumentBuilder()
  //   .setTitle('doc')
  //   .setDescription('api doc')
  //   .setVersion('1.0')
  //   .addTag('doc')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
