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
      website: user.website,
      telegram: user.telegram,
      instagram: user.instagram,
      twitter: user.twitter,
      behance: user.behance,
      artstation: user.artstation,
    };
  }
  async setLinksSettings(dataUser: any, payload: any): Promise<any> {
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: {
        website: payload.website,
        telegram: payload.telegram,
        instagram: payload.instagram,
        twitter: payload.twitter,
        behance: payload.behance,
        artstation: payload.artstation,
      },
    });
    return user;
  }
}
