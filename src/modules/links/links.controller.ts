import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Links')
@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @ApiOperation({ summary: 'Get links' })
  @Get()
  async getLinksSettings(@Res() res) {
    const linksReq = await this.linksService.getLinksSettings();
    return res.status(HttpStatus.OK).json(linksReq);
  }

  @ApiOperation({ summary: 'Set links' })
  @Post()
  @UseInterceptors(FileInterceptor('formdata'))
  async setLinksSettings(@Res() res, @Body() linksDTO: any) {
    const linksReq = await this.linksService.setLinksSettings(linksDTO);
    return res.status(HttpStatus.OK).json(linksReq);
  }
}
