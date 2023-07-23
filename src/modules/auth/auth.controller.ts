import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Post,
  Body,
  UseInterceptors,
  // Delete,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from './auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  @UseInterceptors(FileInterceptor('formdata'))
  async loginUser(@Res() res, @Body() authDTO: any) {
    console.log(authDTO)
    const userLog = await this.authService.loginUser(authDTO);
    return res.status(HttpStatus.OK).json(userLog);
  }

  // @ApiOperation({ summary: 'Registry user' })
  // @Post('registry')
  // @UseInterceptors(FileInterceptor('formdata'))
  // async registryUser(@Res() res, @Body() registrationDTO: any) {
  //   const userReg = await this.authService.registryUser(registrationDTO);
  //   return res.status(HttpStatus.OK).json(userReg);
  // }

  @ApiOperation({ summary: 'Logout user' })
  @UseGuards(AuthGuard)
  @Post('logout')
  @UseInterceptors(FileInterceptor('formdata'))
  async logout(@Res() res, @Req() req) {
    console.log(req.user)
    // await this.authService.logout();
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
