import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Init')
@Controller()
export class ApiController {

  @Get()
  getHello(): string {
    return 'Hello Api'
  }
}