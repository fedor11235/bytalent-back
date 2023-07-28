import { ApiProperty } from '@nestjs/swagger';

export class testAuthDTO {
  @ApiProperty({
    description: 'User login',
    required: true,
  })
  login: string;
}
