import { ApiProperty } from '@nestjs/swagger';

export class SetSecurityDTO {
  @ApiProperty({ description: 'Type authorization' })
  Authorization: String;

  @ApiProperty({ description: 'Enabled 2FA' })
  twoFA: string;
}

