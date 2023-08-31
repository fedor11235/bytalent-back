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
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const fs_1 = require("fs");
let FileController = exports.FileController = class FileController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    getFileBg(res, params) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd() + '/media/backgrounds/' + params.name));
        return new common_1.StreamableFile(file);
    }
    getFilePoster(res, params) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd() + '/media/posters/' + params.name));
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get file background' }),
    (0, common_1.Header)('Content-Type', 'application/json'),
    (0, common_1.Header)('Content-Disposition', 'attachment; filename="package.json"'),
    (0, common_1.Get)('background/:name'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], FileController.prototype, "getFileBg", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get file posters' }),
    (0, common_1.Header)('Content-Type', 'application/json'),
    (0, common_1.Header)('Content-Disposition', 'attachment; filename="package.json"'),
    (0, common_1.Get)('poster/:name'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], FileController.prototype, "getFilePoster", null);
exports.FileController = FileController = __decorate([
    (0, swagger_1.ApiTags)('Files'),
    (0, common_1.Controller)('file'),
    __metadata("design:paramtypes", [file_service_1.FileService])
], FileController);
//# sourceMappingURL=file.controller.js.map