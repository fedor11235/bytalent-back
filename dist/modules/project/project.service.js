"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs");
const child_process_1 = require("child_process");
const PATH_BACKGROUNDS = 'media/backgrounds/';
const PATH_POSTERS = 'media/posters/';
const PATH_PROJECT = 'media/project/';
let ProjectService = exports.ProjectService = class ProjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getActiveProjects(dataUser) {
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
    async getAllProjects() {
        const projects = await this.prisma.project.findMany();
        return {
            projects: projects,
        };
    }
    async createProject(dataUser, payload) {
        return this.prisma.project.create({
            data: {
                name: payload.name,
                address: payload.address,
                type: payload.type,
                author: { connect: { id: dataUser.sub } }
            },
        });
    }
    async deleteProject(id) {
        const project = await this.prisma.project.delete({
            where: { id: id },
        });
        return project;
    }
    async getAllUserProjects(dataUser) {
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
        }
        else {
            return {
                total: 0,
                projects: [],
            };
        }
    }
    async uploadFileProject(dataUser, projectId, payload) {
        const filesProject = [];
        for (const file of payload) {
            const format = file.originalname.split('.')[1];
            const imagesPathFileWrite = PATH_PROJECT + `${new Date().valueOf()}.${format}`;
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
    async getBackgrounds(projectId) {
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
        }
        else {
            return {
                backgrounds: [],
            };
        }
    }
    async selectBackground(projectId, backgroundId) {
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
    async postBackgrounds(dataUser, payload, projectId) {
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
            (0, child_process_1.exec)(`ffmpeg -i ${imagesPathFileWrite} -ss 00:00:01 -vframes 1 ${imagesPathFilePoster}`);
        }
        const background = await this.prisma.backgrounds.create({
            data: {
                path: imagesPathFileWrite,
                format: format,
                name: name,
                type: type,
                project_id: projectId,
                poster_path: `${name}.jpg`,
            },
        });
        return background;
    }
    async deleteBackgrounds(id) {
        const background = await this.prisma.backgrounds.delete({
            where: { id: id },
        });
        fs.unlinkSync(background.path);
        return background;
    }
    async updateProject(projectId, payload) {
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
};
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectService);
//# sourceMappingURL=project.service.js.map