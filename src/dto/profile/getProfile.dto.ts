import { ApiProperty } from '@nestjs/swagger';

export class GetProfileDTO {
  @ApiProperty({
    description: 'User name',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'User surname',
    required: true,
  })
  surname: string;

  @ApiProperty({
    description: 'User organization',
    required: true,
  })
  organization: string;

  @ApiProperty({
    description: 'User position',
    required: true,
  })
  position: string;

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
