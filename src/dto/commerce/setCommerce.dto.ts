import { ApiProperty } from '@nestjs/swagger';

export class SetCommerceDTO {
  @ApiProperty({ description: 'User balance' })
  balance: number;

  @ApiProperty({ description: 'User invoice payments' })
  invoicePayments: string;

  @ApiProperty({ description: 'User operations history' })
  operationsHistory: string;
}
