import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiOperation({ summary: 'Get profile' })
  @Get()
  async getProfileSettings(@Res() res) {
    const profileReq = await this.profileService.getProfileSettings();
    return res.status(HttpStatus.OK).json(profileReq);
  }

  @ApiOperation({ summary: 'Set profile' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setProfileSettings(@Res() res, @Body() profileDTO: any) {
    const profileReq = await this.profileService.setProfileSettings(
      profileDTO,
    );
    return res.status(HttpStatus.OK).json(profileReq);
  }
}
