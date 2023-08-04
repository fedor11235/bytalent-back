import { ApiProperty } from '@nestjs/swagger';

export class ParamsFileProjectDTO {
  @ApiProperty({
    description: 'Id project',
    required: true,
  })
  id: number;
}
