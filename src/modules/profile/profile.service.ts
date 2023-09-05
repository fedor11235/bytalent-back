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
    if (user) {
      return {
        name: user.name,
        surname: user.surname,
        organization: user.organization,
        position: user.position,
        phone: user.phone,
        email: user.email,
        username: user.username,
      };
    } else {
      return {
        name: '',
        surname: '',
        organization: '',
        position: '',
        phone: '',
        username: '',
      };
    }
  }
  async setProfileSettings(dataUser: any, payload: any): Promise<User> {
    const dataUpdate = {};
    for (const index in payload) {
      dataUpdate[index] = payload[index];
    }
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: dataUpdate,
    });
    return user;
  }
}
