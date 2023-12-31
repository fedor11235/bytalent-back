import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import * as getFileType from 'file-type';
// import {fileTypeFromFile} from 'file-type';
import {fileTypeFromBuffer} from 'file-type';
// const getFileType = require('file-type');
// const ffmpeg = require('ffmpeg');
// import * as ffmpeg from 'ffmpeg';
import * as fs from 'fs';
// import { join } from 'path';
// import { User, Prisma } from '@prisma/client';
import { exec } from 'child_process';

const PATH_BACKGROUNDS = 'media/backgrounds/';
const PATH_POSTERS = 'media/posters/';
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
      projects: user.notifications ? user.notifications : [],
    };
  }
  async getAllProjects(): Promise<any> {
    const projects = await this.prisma.project.findMany();
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
        author: { connect: { id: dataUser.sub } }
      },
    });
  }
  async deleteProject(id: number): Promise<any> {
    const project = await this.prisma.project.delete({
      where: { id: id },
    });
    return project;
  }
  async getAllUserProjects(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
      include: {
        projects: {
          include: {
            background: true,
          },
        },
      },
    });
    if (user) {
      let total = 0;
      if (user.projects?.length) {
        total = user.projects.length;
      }
      return {
        total: total,
        projects: user.projects,
      };
    } else {
      return {
        total: 0,
        projects: [],
      };
    }
  }
  async uploadFileProject(
    dataUser: any,
    projectId: number,
    payload: any,
  ): Promise<any> {
    const filesProject = [];

    for (const file of payload) {
      // const format = file.mimetype.split('/')[1];
      const format = file.originalname.split('.')[1];
      const imagesPathFileWrite =
        PATH_PROJECT + `${new Date().valueOf()}.${format}`;

      fs.writeFileSync(imagesPathFileWrite, file.buffer);
      const fileProject = await this.prisma.files.create({
        data: {
          path: imagesPathFileWrite,
          project_id: Number(projectId),
        },
      });
      filesProject.push(fileProject);
    }
    return filesProject;
  }
  async getBackgrounds(projectId: any): Promise<any> {
    const project = await this.prisma.project.findFirst({
      where: { id: Number(projectId) },
      include: {
        backgrounds: true
      }
    });
    if (project) {
      const backgrounds = [];
      for (const background of project.backgrounds) {
        backgrounds.push({
          id: background.id,
          type: background.type,
          name: background.name,
          format: background.format,
          poster_path: background.poster_path,
        });
      }
      return {
        backgrounds: backgrounds,
      };
    } else {
      return {
        backgrounds: [],
      };
    }
  }
  async selectBackground(
    projectId: number,
    backgroundId: number,
  ): Promise<any> {
    const background = await this.prisma.backgrounds.findFirst({
      where: { id: backgroundId },
    });

    await this.prisma.project.update({
      where: { id: projectId },
      data: {
        background_id: background.id,
      },
    });
    return 'ok';
  }
  async postBackgrounds(dataUser: any, payload: any, projectId: any): Promise<any> {
    const format = payload.mimetype.split('/')[1];
    const name = String(new Date().valueOf());
    const imagesPathFileWrite = PATH_BACKGROUNDS + `${name}.${format}`;
    const imagesPathFilePoster = PATH_POSTERS + `${name}.jpg`;
    fs.writeFileSync(imagesPathFileWrite, payload.buffer);
    let type = 'img';
    if (/(mp4|MP4|mov|MOV)$/.test(format)) {
      type = 'video';
    }
    if (type === 'video') {
      exec(
        `ffmpeg -i ${imagesPathFileWrite} -ss 00:00:01 -vframes 1 ${imagesPathFilePoster}`,
      );
    }
    const background = await this.prisma.backgrounds.create({
      data: {
        path: imagesPathFileWrite,
        format: format,
        name: name,
        type: type,
        project_id: projectId,
        // author_id: dataUser.sub,
        poster_path: `${name}.jpg`,
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
  // async orderVisualization(dataUser: any, payload: any): Promise<any> {
  //   return this.prisma.project.create({
  //     data: {
  //       name: payload.title,
  //       author_id: dataUser.sub,
  //       address: payload.address,
  //       type: payload.type,
  //     },
  //   });
  // }
  async updateProject(projectId: number, payload: any): Promise<any> {
    const dataUpdate = {};
    for (const index in payload) {
      if (payload[index]) {
        dataUpdate[index] = payload[index];
      }
    }
    const project = await this.prisma.project.update({
      where: { id: projectId },
      data: dataUpdate,
    });
    return project;
  }
}

// const video = await new ffmpeg(imagesPathFileWrite)

// video.addCommand('-ss', '00:01:30')
// video.addCommand('-vframes', '1')
// video.save(imagesPathFilePoster, (error, file) => {
//   if (!error)
//     console.log('Video file: ' + file);
//   if(error)
//     console.error(error);
// });

//ffmpeg -i ./1693480445952.mp4 -ss 00:00:01 -vframes 1 ./output.png

// const test = await video.fnExtractFrameToJPG('media/posters', {
//   start_time: 100,
//   // every_n_frames: 10,
//   // frame_rate : 1,
//   number : 5,
//   // file_name : 'my_frame_%t_%s'
// });
// console.log(test)
