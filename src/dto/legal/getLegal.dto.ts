import { ApiProperty } from '@nestjs/swagger';

export class GetLegalDTO {
  @ApiProperty({ 
    description: 'User company name',
    required: true,
  })
  companyName: number;

  @ApiProperty({
    description: 'User organizational forms',
    required: true,
  })
  organizationalForms: string;

  @ApiProperty({
    description: 'User OGRN',
    required: true,
  })
  OGRN: string;

  @ApiProperty({
    description: 'User INN',
    required: true,
  })
  INN: string;

  @ApiProperty({
    description: 'User Bank BIC',
    required: true,
  })
  BankBIC: string;

  @ApiProperty({
    description: 'User checking account',
    required: true,
  })
  CheckingAccount: string;
}
