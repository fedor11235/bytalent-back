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
import { AuthGuard } from '../auth/auth.guard';
import { OrderService } from './order.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { MakeOrderDTO } from '../../dto/order/makeOrder.dto';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  // @ApiOperation({ summary: 'Get profile' })
  // @ApiBearerAuth()
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully created.',
  //   type: GetProfileDTO,
  // })
  // @UseGuards(AuthGuard)
  // @Get()
  // async getProfileSettings(@Res() res, @Req() req) {
  //   const profileReq = await this.orderService.getProfileSettings(req.user);
  //   return res.status(HttpStatus.OK).json(profileReq);
  // }

  @ApiOperation({ summary: 'Make an order' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async makeOrder(
    @Res() res,
    @Req() req,
    @Body() makeOrderDTO: MakeOrderDTO,
  ) {
    const profileReq = await this.orderService.makeOrder(
      req.user,
      makeOrderDTO,
    );
    return res.status(HttpStatus.OK).json(profileReq);
  }
}
