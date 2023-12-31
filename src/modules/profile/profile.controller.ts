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
import { AuthGuard } from './../auth/auth.guard';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { GetProfileDTO } from '../../dto/profile/getProfile.dto';
import { SetProfileDTO } from '../../dto/profile/setProfile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @ApiOperation({ summary: 'Get profile' })
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetProfileDTO,
  })
  @UseGuards(AuthGuard)
  @Get()
  async getProfileSettings(@Res() res, @Req() req) {
    const profileReq = await this.profileService.getProfileSettings(req.user);
    return res.status(HttpStatus.OK).json(profileReq);
  }

  @ApiOperation({ summary: 'Set profile' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setProfileSettings(
    @Res() res,
    @Req() req,
    @Body() profileDTO: SetProfileDTO,
  ) {
    const profileReq = await this.profileService.setProfileSettings(
      req.user,
      profileDTO,
    );
    return res.status(HttpStatus.OK).json(profileReq);
  }
}
