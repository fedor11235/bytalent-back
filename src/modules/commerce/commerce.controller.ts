import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { CommerceService } from './commerce.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Commerce')
@Controller('commerce')
export class CommerceController {
  constructor(private commerceService: CommerceService) {}

  @ApiOperation({ summary: 'Get commerce' })
  @Get()
  async getCommerceSettings(@Res() res) {
    const commerceReq = await this.commerceService.getCommerceSettings();
    return res.status(HttpStatus.OK).json(commerceReq);
  }

  @ApiOperation({ summary: 'Set commerce' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setCommerceSettings(@Res() res, @Body() commerceDTO: any) {
    const commerceReq = await this.commerceService.setCommerceSettings(
      commerceDTO,
    );
    return res.status(HttpStatus.OK).json(commerceReq);
  }
}
