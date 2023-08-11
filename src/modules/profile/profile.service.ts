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
    const dataUpdate = {}
    for(const index in payload) {
      if(payload[index]) {
        dataUpdate[index] = payload[index]
      }
    }
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: dataUpdate,
    });
    return user;
  }
}
