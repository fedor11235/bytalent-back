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
const PATH_BACKGROUNDS = 'media/backgrounds/';
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
            projects: user.notifications,
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
                author_id: dataUser.sub,
            },
        });
    }
    async getAllUserProjects(dataUser) {
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
    async uploadFileProject(dataUser, projectId, payload) {
        const filesProject = [];
        for (const file of payload) {
            const format = file.mimetype.split('/')[1];
            const imagesPathFileWrite = PATH_PROJECT + `${new Date().valueOf()}.${format}`;
            filesProject.push('1');
        }
        return filesProject;
    }
    async getBackgrounds(dataUser) {
        const user = await this.prisma.user.findFirst({
            where: { id: dataUser.sub },
            include: {
                backgrounds: true,
            },
        });
        const backgrounds = [];
        return {
            backgrounds: backgrounds,
        };
    }
    async postBackgrounds(dataUser, payload) {
        const format = payload.mimetype.split('/')[1];
        const imagesPathFileWrite = PATH_BACKGROUNDS + `${new Date().valueOf()}.${format}`;
        const background = await this.prisma.backgrounds.create({
            data: {
                path: imagesPathFileWrite,
                author_id: dataUser.sub,
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
    async orderVisualization(dataUser, payload) {
        return this.prisma.project.create({
            data: {
                name: payload.title,
                author_id: dataUser.sub,
                address: payload.address,
                type: payload.type,
            },
        });
    }
};
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectService);
//# sourceMappingURL=project.service.js.map