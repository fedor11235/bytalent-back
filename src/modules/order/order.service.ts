import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getAllOrders(): Promise<any> {
    const orders = await this.prisma.order.findMany()
    return {
      orders: orders,
    };
  }

  async makeOrder(dataUser: any, payload: any): Promise<any> {
    const orderNew = await this.prisma.order.create({
      data: {
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        author_id: dataUser.sub
      },
    });
    return orderNew;
  }
}
