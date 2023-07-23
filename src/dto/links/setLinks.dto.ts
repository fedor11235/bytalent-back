import { ApiProperty } from '@nestjs/swagger';

export class SetLinksDTO {
  @ApiProperty({ description: 'User website' })
  website: number;

  @ApiProperty({ description: 'User telegram' })
  telegram: string;

  @ApiProperty({ description: 'User instagram' })
  instagram: string;

  @ApiProperty({ description: 'User twitter' })
  twitter: string;

  @ApiProperty({ description: 'User behance' })
  behance: string;

  @ApiProperty({ description: 'User artstation' })
  artstation: string;
}
