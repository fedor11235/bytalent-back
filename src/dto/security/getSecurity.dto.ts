import { ApiProperty } from '@nestjs/swagger';

export class GetSecurityDTO {
  @ApiProperty({
    description: 'Type authorization',
    required: true,
  })
  Authorization: string;

  @ApiProperty({
    description: 'Enabled 2FA',
    required: true,
  })
  twoFA: string;
}
