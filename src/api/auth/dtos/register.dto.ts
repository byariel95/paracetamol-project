import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ description: "email", required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ description: " user name", required: true })
    @IsString()
    name : string;

    @ApiProperty({ description: "user lastname", required: true })
    @IsString()
    lastName : string;

    @ApiProperty({ description: "the user password", required: true })
    @IsString()
    @MinLength(5)
    password: string;
}