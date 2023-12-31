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
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async loginUser(payload) {
        const user = await this.prisma.user.findFirst({
            where: { username: payload.login },
        });
        if (user) {
            return {
                access_token: await this.jwtService.signAsync({ sub: user.id }),
            };
        }
        const newUser = await this.prisma.user.create({
            data: { username: payload.login },
        });
        return {
            access_token: await this.jwtService.signAsync({ sub: newUser.id }),
        };
    }
    async loginTelegramUser(payload) {
        const user = await this.prisma.user.findFirst({
            where: { username: payload.username },
        });
        if (user) {
            return {
                access_token: await this.jwtService.signAsync({ sub: user.id }),
            };
        }
        const newUser = await this.prisma.user.create({
            data: {
                authorization: 'Telegram',
                username: payload.username,
                name: payload.name,
                surname: payload.surname,
            },
        });
        return {
            access_token: await this.jwtService.signAsync({ sub: newUser.id }),
        };
    }
    async loginAppleUser(payload) {
        const user = await this.prisma.user.findFirst({
            where: { username: payload.username },
        });
        if (user) {
            return {
                access_token: await this.jwtService.signAsync({ sub: user.id }),
            };
        }
        const newUser = await this.prisma.user.create({
            data: {
                authorization: 'Apple',
                username: payload.username,
                name: payload.name,
                surname: payload.surname,
            },
        });
        return {
            access_token: await this.jwtService.signAsync({ sub: newUser.id }),
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map