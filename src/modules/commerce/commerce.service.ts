import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class CommerceService {
  constructor(private prisma: PrismaService) {}
  async getCommerce(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
      include: {
        invoicePayments: true
      }
    });
    return {
      balance: user.balance,
      invoicePayments: user.invoicePayments
    };
  }
  async setCommerce(payload: any): Promise<any> {
    return true;
  }
}
