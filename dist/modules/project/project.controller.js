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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./../auth/auth.guard");
const project_service_1 = require("./project.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const createProject_dto_1 = require("../../dto/project/createProject.dto");
const deleteProject_dto_1 = require("../../dto/project/deleteProject.dto");
const paramsFileProject_dto_1 = require("../../dto/project/paramsFileProject.dto");
let ProjectController = exports.ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async getAllProjects(res) {
        const projectReq = await this.projectService.getAllProjects();
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async getActiveProjects(res, req) {
        const projectReq = await this.projectService.getActiveProjects(req.user);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async getAllUserProjects(res, req) {
        const projectReq = await this.projectService.getAllUserProjects(req.user);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async createProject(res, req, createProjectDTO) {
        const projectReq = await this.projectService.createProject(req.user, createProjectDTO);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async uploadFileProject(res, req, files, params) {
        const projectReq = await this.projectService.uploadFileProject(req.user, params.id, files);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async getBackgrounds(res, req) {
        const projectReq = await this.projectService.getBackgrounds(req.user);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async postBackgrounds(res, req, file) {
        const projectReq = await this.projectService.postBackgrounds(req.user, file);
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
    async deleteBackgrounds(res, params) {
        const projectReq = await this.projectService.deleteBackgrounds(Number(params.id));
        return res.status(common_1.HttpStatus.OK).json(projectReq);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all projects' }),
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllProjects", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get active project' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('active'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getActiveProjects", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get active project' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('number'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllUserProjects", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create project' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, createProject_dto_1.CreateProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Upload file project' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        required: true,
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                        description: 'Files project',
                    },
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)()),
    (0, common_1.Post)('upload/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __param(3, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Array,
        paramsFileProject_dto_1.ParamsFileProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "uploadFileProject", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get backgrounds' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('backgrounds'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getBackgrounds", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Post background' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiBody)({
        required: true,
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Background project',
                },
            },
        },
    }),
    (0, common_1.Post)('backgrounds'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "postBackgrounds", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete background' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('backgrounds/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, deleteProject_dto_1.DeleteProjectDTO]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteBackgrounds", null);
exports.ProjectController = ProjectController = __decorate([
    (0, swagger_1.ApiTags)('Project'),
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map