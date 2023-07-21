import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { CommerceService } from './commerce.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetCommerceDTO } from '../../dto/commerce/getCommerce.dto';
import { SetCommerceDTO } from '../../dto/commerce/setCommerce.dto';

@ApiTags('Commerce')
@Controller('commerce')
export class CommerceController {
  constructor(private commerceService: CommerceService) {}

  @ApiOperation({ summary: 'Get commerce' })
  @ApiCreatedResponse({
    description: 'Successfully',
    type: GetCommerceDTO,
  })
  @Get()
  async getCommerceSettings(@Res() res) {
    const commerceReq = await this.commerceService.getCommerceSettings();
    return res.status(HttpStatus.OK).json(commerceReq);
  }

  @ApiOperation({ summary: 'Set commerce' })
  @Post()
  async setCommerceSettings(@Res() res, @Body() commerceDTO: SetCommerceDTO) {
    const commerceReq = await this.commerceService.setCommerceSettings(
      commerceDTO,
    );
    return res.status(HttpStatus.OK).json(commerceReq);
  }
}
