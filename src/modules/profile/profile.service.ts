import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async getProfileSettings(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
    });
    return {
      name: user.name,
      surname: user.surname,
      organization: user.organization,
      position: user.position,
      phone: user.phone,
      email: user.email,
    };
  }
  async setProfileSettings(dataUser: any, payload: any): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: {
        name: payload.name,
        surname: payload.surname,
        organization: payload.organization,
        position: payload.position,
        phone: payload.phone,
        email: payload.email,
      }
    });
    return user;
  }
}

