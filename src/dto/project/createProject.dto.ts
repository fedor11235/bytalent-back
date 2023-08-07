import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDTO {
  @ApiProperty({
    description: 'Project name',
    required: true,
  })
  name: number;
  @ApiProperty({
    description: 'Project address',
    required: true,
  })
  address: number;
  @ApiProperty({
    description: 'Project type',
    required: true,
  })
  type: number;
}
