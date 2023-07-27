import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
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
  @UseGuards(AuthGuard)
  @Get()
  async getCommerceSettings(@Res() res, @Req() req) {
    const commerceReq = await this.commerceService.getCommerce(req.user);
    return res.status(HttpStatus.OK).json(commerceReq);
  }

  @ApiOperation({ summary: 'Set commerce' })
  @Post()
  async setCommerceSettings(@Res() res, @Body() commerceDTO: SetCommerceDTO) {
    const commerceReq = await this.commerceService.setCommerce(commerceDTO);
    return res.status(HttpStatus.OK).json(commerceReq);
  }
}
