import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Post,
  Body,
  UseInterceptors,
  Get,
  // Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';
import { testAuthDTO } from '../../dto/auth/testAuth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  @UseInterceptors(FileInterceptor('formdata'))
  async loginUser(@Res() res, @Body() authDTO: testAuthDTO) {
    const userLog = await this.authService.loginUser(authDTO);
    return res.status(HttpStatus.OK).json(userLog);
  }

  @ApiOperation({ summary: 'Registration/Login via telegram user' })
  @Post('telegram')
  @UseInterceptors(FileInterceptor('formdata'))
  async loginTelegramUser(@Res() res, @Body() authDTO: testAuthDTO) {
    const userReg = await this.authService.loginTelegramUser(authDTO);
    return res.status(HttpStatus.OK).json(userReg);
  }

  @ApiOperation({ summary: 'Registration/Login via apple id user' })
  @Post('apple')
  @UseInterceptors(FileInterceptor('formdata'))
  async loginAppleUser(@Res() res, @Body() authDTO: testAuthDTO) {
    const userReg = await this.authService.loginAppleUser(authDTO);
    return res.status(HttpStatus.OK).json(userReg);
  }

  @ApiOperation({ summary: 'Check user token' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('check')
  async logout(@Res() res) {
    return res.status(HttpStatus.OK).json('ok');
  }

  // @ApiOperation({ summary: 'Delete user' })
  // @Delete('delete')
  // @UseInterceptors(FileInterceptor('formdata'))
  // async deleteUser(@Res() res, @Headers() headers) {
  //   await this.authService.deleteUser(headers.authorization);
  //   return res.status(HttpStatus.OK).json('ok');
  // }
}
