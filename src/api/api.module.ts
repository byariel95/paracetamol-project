import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ConfigModule } from './config/config.module';
import { ApiController } from './api.controller';
import { AuthModule } from './auth/auth.module';
@Module({
 imports:[PrismaModule, ConfigModule, AuthModule],
 controllers:[ApiController]
})
export class ApiModule {}
