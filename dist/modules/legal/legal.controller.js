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
exports.LegalController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./../auth/auth.guard");
const legal_service_1 = require("./legal.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const getLegal_dto_1 = require("../../dto/legal/getLegal.dto");
const setLegal_dto_1 = require("../../dto/legal/setLegal.dto");
let LegalController = exports.LegalController = class LegalController {
    constructor(legalService) {
        this.legalService = legalService;
    }
    async getLegalSettings(res, req) {
        const LegalReq = await this.legalService.getLegalSettings(req.user);
        return res.status(common_1.HttpStatus.OK).json(LegalReq);
    }
    async setLegalSettings(res, req, legalDTO) {
        const LegalReq = await this.legalService.setLegalSettings(req.user, legalDTO);
        return res.status(common_1.HttpStatus.OK).json(LegalReq);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get legal' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Successfully',
        type: getLegal_dto_1.GetLegalDTO,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], LegalController.prototype, "getLegalSettings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Set legal' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, setLegal_dto_1.SetLegalDTO]),
    __metadata("design:returntype", Promise)
], LegalController.prototype, "setLegalSettings", null);
exports.LegalController = LegalController = __decorate([
    (0, swagger_1.ApiTags)('Legal'),
    (0, common_1.Controller)('legal'),
    __metadata("design:paramtypes", [legal_service_1.LegalService])
], LegalController);
//# sourceMappingURL=legal.controller.js.map