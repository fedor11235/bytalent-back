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
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetProfileDTO } from '../../dto/profile/getProfile.dto';
import { SetProfileDTO } from '../../dto/profile/setProfile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiOperation({ summary: 'Get profile' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetProfileDTO,
  })
  @Get()
  async getProfileSettings(@Res() res) {
    const profileReq = await this.profileService.getProfileSettings();
    return res.status(HttpStatus.OK).json(profileReq);
  }

  @ApiOperation({ summary: 'Set profile' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setProfileSettings(@Res() res, @Body() profileDTO: SetProfileDTO) {
    const profileReq = await this.profileService.setProfileSettings(profileDTO);
    return res.status(HttpStatus.OK).json(profileReq);
  }
}
