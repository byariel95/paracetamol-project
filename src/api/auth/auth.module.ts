import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { PasswordService,ResponseData } from '../shared/utils';


@Module({
  controllers: [AuthController],
  providers: [AuthService,PasswordService,ResponseData],
})
export class AuthModule {}
