import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async getActiveProjects(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
      include: {
        projects: {
          where: {active: true}
        },
      }
    });
    return {
      projects: user.projects
    };
  }
}
