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
exports.LinksController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./../auth/auth.guard");
const links_service_1 = require("./links.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const getLinks_dto_1 = require("../../dto/links/getLinks.dto");
const setLinks_dto_1 = require("../../dto/links/setLinks.dto");
let LinksController = exports.LinksController = class LinksController {
    constructor(linksService) {
        this.linksService = linksService;
    }
    async getLinksSettings(res, req) {
        const linksReq = await this.linksService.getLinksSettings(req.user);
        return res.status(common_1.HttpStatus.OK).json(linksReq);
    }
    async setLinksSettings(res, req, linksDTO) {
        const linksReq = await this.linksService.setLinksSettings(req.user, linksDTO);
        return res.status(common_1.HttpStatus.OK).json(linksReq);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get links' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: getLinks_dto_1.GetLinksDTO,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "getLinksSettings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Set links' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, setLinks_dto_1.SetLinksDTO]),
    __metadata("design:returntype", Promise)
], LinksController.prototype, "setLinksSettings", null);
exports.LinksController = LinksController = __decorate([
    (0, swagger_1.ApiTags)('Links'),
    (0, common_1.Controller)('links'),
    __metadata("design:paramtypes", [links_service_1.LinksService])
], LinksController);
//# sourceMappingURL=links.controller.js.map