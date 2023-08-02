import { ApiProperty } from '@nestjs/swagger';

export class PostBackgroundDTO {
  // @ApiProperty({
  //   description: 'File background',
  //   required: true,
  // })
  // file: string;
  @ApiProperty({
    description: 'File background',
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: Express.Multer.File;
}
