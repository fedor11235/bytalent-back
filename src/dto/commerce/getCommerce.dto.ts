import { ApiProperty } from '@nestjs/swagger';

export class GetCommerceDTO {
  @ApiProperty({ 
    description: 'User balance',
    required: true,
  })
  balance: number;

  @ApiProperty({
    description: 'User invoice payments',
    required: true,
  })
  invoicePayments: string;

  @ApiProperty({
    description: 'User operations history',
    required: true,
  })
  operationsHistory: string;
}