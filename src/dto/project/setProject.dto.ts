import { ApiProperty } from '@nestjs/swagger';

export class SetProjectDTO {
  @ApiProperty({ description: 'Project title' })
  title: number;

  @ApiProperty({ description: 'Project text' })
  text: string;

  @ApiProperty({ description: 'Project description' })
  description: string;
}
