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
exports.CommerceController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./../auth/auth.guard");
const commerce_service_1 = require("./commerce.service");
const swagger_1 = require("@nestjs/swagger");
const getCommerce_dto_1 = require("../../dto/commerce/getCommerce.dto");
const setCommerce_dto_1 = require("../../dto/commerce/setCommerce.dto");
let CommerceController = exports.CommerceController = class CommerceController {
    constructor(commerceService) {
        this.commerceService = commerceService;
    }
    async getCommerceSettings(res, req) {
        const commerceReq = await this.commerceService.getCommerce(req.user);
        return res.status(common_1.HttpStatus.OK).json(commerceReq);
    }
    async setCommerceSettings(res, commerceDTO) {
        const commerceReq = await this.commerceService.setCommerce(commerceDTO);
        return res.status(common_1.HttpStatus.OK).json(commerceReq);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get commerce' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Successfully',
        type: getCommerce_dto_1.GetCommerceDTO,
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "getCommerceSettings", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Set commerce' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, setCommerce_dto_1.SetCommerceDTO]),
    __metadata("design:returntype", Promise)
], CommerceController.prototype, "setCommerceSettings", null);
exports.CommerceController = CommerceController = __decorate([
    (0, swagger_1.ApiTags)('Commerce'),
    (0, common_1.Controller)('commerce'),
    __metadata("design:paramtypes", [commerce_service_1.CommerceService])
], CommerceController);
//# sourceMappingURL=commerce.controller.js.map