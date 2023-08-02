import { ApiProperty } from '@nestjs/swagger';

export class DeleteProjectDTO {
  @ApiProperty({
    description: 'Id Background',
    required: true,
  })
  id: number;
}
