import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { SecurityService } from './security.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetSecurityDTO } from '../../dto/security/getSecurity.dto';
import { SetSecurityDTO } from '../../dto/security/setSecurity.dto';

@ApiTags('Security')
@Controller('security')
export class SecurityController {
  constructor(private securityService: SecurityService) {}

  @ApiOperation({ summary: 'Get security' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetSecurityDTO,
  })
  @UseGuards(AuthGuard)
  @Get()
  async getSecuritySettings(@Res() res, @Req() req) {
    const securityReq = await this.securityService.getSecuritySettings(
      req.user,
    );
    return res.status(HttpStatus.OK).json(securityReq);
  }

  @ApiOperation({ summary: 'Set security' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setSecuritySettings(@Res() res, @Body() securityDTO: SetSecurityDTO) {
    const securityReq = await this.securityService.setSecuritySettings(
      securityDTO,
    );
    return res.status(HttpStatus.OK).json(securityReq);
  }
}
