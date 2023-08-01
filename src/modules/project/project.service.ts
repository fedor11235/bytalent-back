import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async getActiveProjects(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        projects: {
          where: { status: 'active' },
        },
      },
    });
    return {
      projects: user.projects,
    };
  }
  async getBackgrounds(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        backgrounds: true,
      },
    });

    const backgrounds = []

    for(const background of user.backgrounds) {
      const buffer = fs.readFileSync(background.path);
      const b64 = Buffer.from(buffer).toString('base64');
      const mimeType = 'image/png'
      backgrounds.push(`data:${mimeType};base64,${b64}`)
    }

    return {
      backgrounds: backgrounds
    }
    // return {
    //   notifications: user.notifications,
    // };
  }
  async orderVisualization(dataUser: any, payload: any): Promise<any> {
    return this.prisma.project.create({
      data: {
        name: payload.title,
        author_id: dataUser.sub,
        address: payload.address,
        type: payload.type,
      },
    });
  }
}
