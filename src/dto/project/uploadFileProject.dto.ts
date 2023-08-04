import { ApiProperty } from '@nestjs/swagger';

export class UploadFileProjectDTO {
  @ApiProperty({
    description: 'Files project',
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: Express.Multer.File;
}
