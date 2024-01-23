import { INestApplication } from "@nestjs/common";
import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
      //.addBearerAuth()
    .setTitle('DATE CONTROL API')
    .setDescription('Api Build Paracetamol') 
    .setVersion('1.2')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('/api/docs',app, document,{
        swaggerOptions:{
            filter:true,
            tagsSorter:'alpha',
            operationsSorter: 'alpha',
        }
    });
};