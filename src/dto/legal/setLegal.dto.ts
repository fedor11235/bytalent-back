import { ApiProperty } from '@nestjs/swagger';

export class SetLegalDTO {
  @ApiProperty({ description: 'User company name' })
  companyName: number;

  @ApiProperty({ description: 'User organizational forms' })
  organizationalForms: string;

  @ApiProperty({ description: 'User OGRN' })
  OGRN: string;

  @ApiProperty({ description: 'User INN' })
  INN: string;

  @ApiProperty({ description: 'User Bank BIC' })
  BankBIC: string;

  @ApiProperty({ description: 'User checking account' })
  CheckingAccount: string;
}
