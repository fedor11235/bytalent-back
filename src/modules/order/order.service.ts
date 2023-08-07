import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  // async makeOrder(dataUser: any): Promise<any> {
  //   const user = await this.prisma.user.findFirst({
  //     where: { id: dataUser.sub },
  //   });
  //   return {
  //     name: user.name,
  //     surname: user.surname,
  //     organization: user.organization,
  //     position: user.position,
  //     phone: user.phone,
  //     email: user.email,
  //   };
  // }
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
