import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}
  async getLinksSettings(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
    });
    return {
      website: user.Website,
      telegram: user.Telegram,
      instagram: user.Instagram,
      twitter: user.Twitter,
      behance: user.Behance,
      artstation: user.Artstation,
    };
  }
  async setLinksSettings(payload: any): Promise<any> {
    return true;
  }
}
