import type { Response } from 'express';
import {
  Controller,
  Get,
  StreamableFile,
  UseGuards,
  Param,
  Header,
  Res,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { FileService } from './file.service';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { join } from 'path';
import { createReadStream } from 'fs';

@ApiTags('Files')
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @ApiOperation({ summary: 'Get file' })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard)
  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="package.json"')
  @Get('background/:name')
  getFile(
    @Res({ passthrough: true }) res: Response,
    @Param() params: any,
  ): StreamableFile {
    const file = createReadStream(
      join(process.cwd() + '/media/backgrounds/' + params.name),
    );
    return new StreamableFile(file);
  }
}
// localhost:3000/file/background/1691779251313
