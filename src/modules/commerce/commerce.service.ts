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
        notifications: {
          where: { type: 'operation_history' || 'invoice_payments' }
        }
      },
    });
    return {
      balance: user.balance,
      invoicePayments: user.notifications.find(notification => notification.type === 'invoice_payments'),
      operationsHistory: user.notifications.find(notification => notification.type === 'operation_history'),
    };
  }
  async setCommerce(payload: any): Promise<any> {
    return true;
  }
}
