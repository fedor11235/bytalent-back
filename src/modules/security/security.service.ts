import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class SecurityService {
  constructor(private prisma: PrismaService) {}
  async getSecuritySettings(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
    });
    return {
      authorization: user.authorization,
      '2FA': user.two_fa,
    };
  }
  async setSecuritySettings(payload: any): Promise<any> {
    return true;
  }
}
