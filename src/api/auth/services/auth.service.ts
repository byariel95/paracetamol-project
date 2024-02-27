import { ConflictException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { PasswordService } from '../../shared/utils/password.service';
import { RegisterDto } from '../dtos';

@Injectable()
export class AuthService {

    constructor(
        private prisma :PrismaService,
        private passwordService :PasswordService
    ){}

    private readonly logger = new Logger('AuthService');
    async registerUser(registerDto:RegisterDto){
        try {
            const hashedPassword = await this.passwordService.hashPassword(registerDto.password);
            const user = await this.prisma.user.create({
                data: {
                    email: registerDto.email,
                    name: registerDto.name,
                    lastName: registerDto.lastName,
                    password: hashedPassword,
                    role: 'admin'
                }
            });
            return user;
        } catch (error) {
            if(error.code === 'P2002')
            {
                this.logger.warn(`error user already exist ${error.code}`)
                throw new ConflictException('email aready exist');
            }
            
            this.logger.error(`error in createUser ${JSON.stringify(error)}`)
            throw new InternalServerErrorException('Internal Server Exception');
        }
    }

}
