import { ApiProperty } from '@nestjs/swagger';

export class GetLinksDTO {
  @ApiProperty({
    description: 'User website',
    required: true,
  })
  website: number;

  @ApiProperty({
    description: 'User telegram',
    required: true,
  })
  telegram: string;

  @ApiProperty({
    description: 'User instagram',
    required: true,
  })
  instagram: string;

  @ApiProperty({
    description: 'User twitter',
    required: true,
  })
  twitter: string;

  @ApiProperty({
    description: 'User behance',
    required: true,
  })
  behance: string;

  @ApiProperty({
    description: 'User artstation',
    required: true,
  })
  artstation: string;
}
