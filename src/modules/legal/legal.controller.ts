import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
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
