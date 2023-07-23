import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { LinksService } from './links.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetLinksDTO } from '../../dto/links/getLinks.dto';
import { SetLinksDTO } from '../../dto/links/setLinks.dto';

@ApiTags('Links')
@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @ApiOperation({ summary: 'Get links' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetLinksDTO,
  })
  @UseGuards(AuthGuard)
  @Get()
  async getLinksSettings(@Res() res) {
    const linksReq = await this.linksService.getLinksSettings();
    return res.status(HttpStatus.OK).json(linksReq);
  }

  @ApiOperation({ summary: 'Set links' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setLinksSettings(@Res() res, @Body() linksDTO: SetLinksDTO) {
    const linksReq = await this.linksService.setLinksSettings(linksDTO);
    return res.status(HttpStatus.OK).json(linksReq);
  }
}
