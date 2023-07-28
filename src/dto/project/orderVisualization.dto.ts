import { ApiProperty } from '@nestjs/swagger';

export class OrderVisualizationDTO {
  @ApiProperty({ description: 'Project title' })
  title: number;

  @ApiProperty({ description: 'Project address' })
  address: string;

  @ApiProperty({ description: 'Project type' })
  type: string;
}
