import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
  async orderVisualization(dataUser: any, payload: any): Promise<any> {
    return this.prisma.project.create({
      data: {
        name: payload.title,
        author_id: dataUser.sub,
        address: payload.address,
        type: payload.type
      },
    });
  }
}
