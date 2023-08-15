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
const jwt = require('jsonwebtoken');
const fs = require("fs");
const PATH_BACKGROUNDS = 'media/backgrounds/';
const PATH_BACKGROUNDS_DEFAULT = 'media/default/';
const APPLE_KEY = 'apple-key.p8';
const TEAM_ID = '';
const CLIENT_ID = '';
const KEY_ID = '';
let AuthService = exports.AuthService = class AuthService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async loginUser(payload) {
        const user = await this.prisma.user.findFirst({
            where: { email: payload.login },
        });
        if (user) {
            return {
                access_token: await this.jwtService.signAsync({ sub: user.id }),
            };
        }
        const newUser = await this.prisma.user.create({
            data: { email: payload.login },
        });
        await this.creatingDfaultBackgrounds(newUser);
        return {
            access_token: await this.jwtService.signAsync({ sub: newUser.id }),
        };
    }
    async registrationTelegramUser(payload) {
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
                artstation: 'Telegram',
                username: payload.username,
                name: payload.name,
                surname: payload.surname
            },
        });
        await this.creatingDfaultBackgrounds(newUser);
        return {
            access_token: await this.jwtService.signAsync({ sub: newUser.id }),
        };
    }
    async loginAppleUser(payload) {
        return 'ok';
    }
    async creatingDfaultBackgrounds(newUser) {
        const filesDefault = fs.readdirSync(PATH_BACKGROUNDS_DEFAULT);
        for (const index in filesDefault) {
            const imagesPathFileRead = PATH_BACKGROUNDS_DEFAULT + filesDefault[index];
            const imagesPathFileWrite = PATH_BACKGROUNDS + `${new Date().valueOf()}.jpeg`;
            const img = fs.readFileSync(imagesPathFileRead);
            fs.writeFileSync(imagesPathFileWrite, img);
            await this.prisma.backgrounds.create({
                data: {
                    path: imagesPathFileWrite,
                    author_id: newUser.id,
                },
            });
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map