import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { SecurityService } from './security.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Security')
@Controller('security')
export class SecurityController {
  constructor(private securityService: SecurityService) {}

  @ApiOperation({ summary: 'Get security' })
  @Get()
  async getSecuritySettings(@Res() res) {
    const securityReq = await this.securityService.getSecuritySettings();
    return res.status(HttpStatus.OK).json(securityReq);
  }

  @ApiOperation({ summary: 'Set security' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setSecuritySettings(@Res() res, @Body() securityDTO: any) {
    const securityReq = await this.securityService.setSecuritySettings(
      securityDTO,
    );
    return res.status(HttpStatus.OK).json(securityReq);
  }
}
