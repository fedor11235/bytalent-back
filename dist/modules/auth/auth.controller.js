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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("./auth.guard");
const testAuth_dto_1 = require("../../dto/auth/testAuth.dto");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginUser(res, authDTO) {
        const userLog = await this.authService.loginUser(authDTO);
        return res.status(common_1.HttpStatus.OK).json(userLog);
    }
    async loginTelegramUser(res, authDTO) {
        const userReg = await this.authService.loginTelegramUser(authDTO);
        return res.status(common_1.HttpStatus.OK).json(userReg);
    }
    async loginAppleUser(res, authDTO) {
        const userReg = await this.authService.loginAppleUser(authDTO);
        return res.status(common_1.HttpStatus.OK).json(userReg);
    }
    async logout(res) {
        return res.status(common_1.HttpStatus.OK).json('ok');
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Login user' }),
    (0, common_1.Post)('login'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, testAuth_dto_1.testAuthDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registration/Login via telegram user' }),
    (0, common_1.Post)('telegram'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, testAuth_dto_1.testAuthDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginTelegramUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Registration/Login via apple id user' }),
    (0, common_1.Post)('apple'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('formdata')),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, testAuth_dto_1.testAuthDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "loginAppleUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Check user token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('check'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map