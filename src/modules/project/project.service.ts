import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import { User, Prisma } from '@prisma/client';

const PATH_BACKGROUNDS = 'media/backgrounds/';
const PATH_PROJECT = 'media/project/';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}
  async getActiveProjects(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        notifications: {
          where: { type: 'active_projects' },
        },
      },
    });
    return {
      projects: user.notifications,
    };
  }

  async getAllProjects(): Promise<any> {
    const projects = await this.prisma.project.findMany()
    return {
      projects: projects,
    };
  }

  async createProject(dataUser: any, payload: any): Promise<any> {
    return this.prisma.project.create({
      data: {
        name: payload.name,
        address: payload.address,
        type: payload.type,
        author_id: dataUser.sub,
      },
    });
  }
  async getAllUserProjects(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        projects: true,
      },
    });
    return {
      total: user.projects.length,
      projects: user.projects,
    };
  }
  async uploadFileProject(
    dataUser: any,
    projectId: number,
    payload: any,
  ): Promise<any> {
    const filesProject = [];
    for (const file of payload) {
      const format = file.mimetype.split('/')[1];
      const imagesPathFileWrite =
        PATH_PROJECT + `${new Date().valueOf()}.${format}`;
      fs.writeFileSync(imagesPathFileWrite, file.buffer);
      const fileProject = await this.prisma.files.create({
        data: {
          path: imagesPathFileWrite,
          project_id: projectId,
        },
      });
      filesProject.push(fileProject)
      filesProject.push('1');
    }
    return filesProject;
  }
  async getBackgrounds(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        backgrounds: true,
      },
    });
    const backgrounds = [];
    for (const background of user.backgrounds) {
      const buffer = fs.readFileSync(background.path);
      const b64 = Buffer.from(buffer).toString('base64');
      const mimeType = 'image/png';
      backgrounds.push({
        id: background.id,
        img: `data:${mimeType};base64,${b64}`,
      });
    }
    return {
      backgrounds: backgrounds,
    };
  }
  async postBackgrounds(dataUser: any, payload: any): Promise<any> {
    const format = payload.mimetype.split('/')[1];
    const imagesPathFileWrite =
      PATH_BACKGROUNDS + `${new Date().valueOf()}.${format}`;
    fs.writeFileSync(imagesPathFileWrite, payload.buffer);
    const background = await this.prisma.backgrounds.create({
      data: {
        path: imagesPathFileWrite,
        author_id: dataUser.sub,
      },
    });
    return background;
  }
  async deleteBackgrounds(id: number): Promise<any> {
    const background = await this.prisma.backgrounds.delete({
      where: { id: id },
    });
    fs.unlinkSync(background.path);
    return background;
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
