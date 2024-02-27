import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResponseData } from '../../shared/utils';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dtos';


@Controller('auth')
export class AuthController {
  constructor(
      private readonly authService: AuthService,
      private readonly responseService: ResponseData
    ) {}

  
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'register a new User' })
  @Post('register')
  async signin(@Body() register: RegisterDto) {
    try {
      const response = await this.authService.registerUser(register);
      return this.responseService.resultResponse(HttpStatus.OK,'Success', response);
    } catch (error) {
      return this.responseService.resultError(error.status || HttpStatus.INTERNAL_SERVER_ERROR, error.response.error, null)
    }
  }
}
