import { ApiProperty } from '@nestjs/swagger';

export class SetProfileDTO {
  @ApiProperty({ description: 'User name' })
  name: string;

  @ApiProperty({ description: 'User surname' })
  surname: string;

  @ApiProperty({ description: 'User organization' })
  organization: string;

  @ApiProperty({ description: 'User position' })
  position: string;

  @ApiProperty({ description: 'User phone' })
  phone: string;

  @ApiProperty({ description: 'User email' })
  email: string;
}
