import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from './config/config.module';
import { ApiController } from './api.controller';
@Module({
 imports:[PrismaModule, ConfigModule],
 controllers:[ApiController]
})
export class ApiModule {}
