import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
  Delete,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  @UseInterceptors(FileInterceptor('formdata'))
  async loginUser(@Res() res, @Body() authDTO: any) {
    const userLog = await this.authService.loginUser(authDTO);
    return res.status(HttpStatus.OK).json(userLog);
  }

  @ApiOperation({ summary: 'Login user' })
  @Post('registry')
  @UseInterceptors(FileInterceptor('formdata'))
  async registryUser(@Res() res, @Body() registrationDTO: any) {
    const userReg = await this.authService.registryUser(registrationDTO);
    return res.status(HttpStatus.OK).json(userReg);
  }

  @Post('logout')
  @UseInterceptors(FileInterceptor('formdata'))
  async logout(@Res() res, @Headers() headers) {
    await this.authService.logout(headers.authorization);
    return res.status(HttpStatus.OK).json('ok');
  }

  @Delete('delete')
  @UseInterceptors(FileInterceptor('formdata'))
  async deleteUser(@Res() res, @Headers() headers) {
    await this.authService.deleteUser(headers.authorization);
    return res.status(HttpStatus.OK).json('ok');
  }
}
