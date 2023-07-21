import { ApiProperty } from '@nestjs/swagger';

export class GetSecurityDTO {
  @ApiProperty({ 
    description: 'Type authorization',
    required: true,
  })
  Authorization: String;

  @ApiProperty({
    description: 'Enabled 2FA',
    required: true,
  })
  twoFA: string;
}
