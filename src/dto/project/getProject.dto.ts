import { ApiProperty } from '@nestjs/swagger';

export class GetProjectDTO {
  @ApiProperty({ 
    description: 'Project title',
    required: true,
  })
  title: String;

  @ApiProperty({
    description: 'Project text',
    required: true,
  })
  text: string;

  @ApiProperty({
    description: 'Project description',
    required: true,
  })
  description: string;

  @ApiProperty({
    description: 'Project active',
    required: true,
  })
  active: boolean;
}
