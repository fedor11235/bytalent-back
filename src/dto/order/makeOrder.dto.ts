import { ApiProperty } from '@nestjs/swagger';

export class MakeOrderDTO {
  @ApiProperty({
    description: 'User name',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'User phone',
    required: true,
  })
  phone: string;

  @ApiProperty({
    description: 'User email',
    required: true,
  })
  email: string;
}
