import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}
  async getLinksSettings(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
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
  async setLinksSettings(dataUser: any, payload: any): Promise<any> {
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: {
        Website: payload.website,
        Telegram: payload.telegram,
        Instagram: payload.instagram,
        Twitter: payload.twitter,
        Behance: payload.behance,
        Artstation: payload.artstation,
      },
    });
    return user;
  }
}
