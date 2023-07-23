import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { LegalService } from './legal.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetLegalDTO } from '../../dto/legal/getLegal.dto';
import { SetLegalDTO } from '../../dto/legal/setLegal.dto';

@ApiTags('Legal')
@Controller('legal')
export class LegalController {
  constructor(private legalService: LegalService) {}

  @ApiOperation({ summary: 'Get legal' })
  @ApiCreatedResponse({
    description: 'Successfully',
    type: GetLegalDTO,
  })
  @UseGuards(AuthGuard)
  @Get()
  async getLegalSettings(@Res() res) {
    const LegalReq = await this.legalService.getLegalSettings();
    return res.status(HttpStatus.OK).json(LegalReq);
  }

  @ApiOperation({ summary: 'Set legal' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setLegalSettings(@Res() res, @Body() legalDTO: SetLegalDTO) {
    const LegalReq = await this.legalService.setLegalSettings(legalDTO);
    return res.status(HttpStatus.OK).json(LegalReq);
  }
}
