import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async getProfileSettings(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
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
  async setProfileSettings(payload: any): Promise<any> {
    return true;
  }
}
