import { DocumentBuilder } from '@nestjs/swagger';

export const options = new DocumentBuilder()
    .setTitle('Nest JS POC')
    .setDescription('Knowledge and learning on Nest JS')
    .setVersion('1.0')
    .addTag('nest JS')
    .build();