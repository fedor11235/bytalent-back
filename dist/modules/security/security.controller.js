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
exports.SecurityController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./../auth/auth.guard");
const security_service_1 = require("./security.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const getSecurity_dto_1 = require("../../dto/security/getSecurity.dto");
const setSecurity_dto_1 = require("../../dto/security/setSecurity.dto");
let SecurityController = exports.SecurityController = class SecurityController {
    constructor(securityService) {
        this.securityService = securityService;
    }
    async getSecuritySettings(res, req) {
        const securityReq = await this.securityService.getSecuritySettings(req.user);
        return res.status(common_1.HttpStatus.OK).json(securityReq);
    }
    async setSecuritySettings(res, securityDTO) {
        const securityReq = await this.securityService.setSecuritySettings(securityDTO);
        return res.status(common_1.HttpStatus.OK).json(securityReq);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get security' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The record has been successfully created.',
        type: getSecurity_dto_1.GetSecurityDTO,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "getSecuritySettings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Set security' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, setSecurity_dto_1.SetSecurityDTO]),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "setSecuritySettings", null);
exports.SecurityController = SecurityController = __decorate([
    (0, swagger_1.ApiTags)('Security'),
    (0, common_1.Controller)('security'),
    __metadata("design:paramtypes", [security_service_1.SecurityService])
], SecurityController);
//# sourceMappingURL=security.controller.js.map