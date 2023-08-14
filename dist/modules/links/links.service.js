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
exports.LinksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LinksService = exports.LinksService = class LinksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLinksSettings(dataUser) {
        const user = await this.prisma.user.findFirst({
            where: { id: dataUser.sub },
        });
        return {
            website: user.website,
            telegram: user.telegram,
            instagram: user.instagram,
            twitter: user.twitter,
            behance: user.behance,
            artstation: user.artstation,
        };
    }
    async setLinksSettings(dataUser, payload) {
        const user = await this.prisma.user.update({
            where: { id: dataUser.sub },
            data: {
                website: payload.website,
                telegram: payload.telegram,
                instagram: payload.instagram,
                twitter: payload.twitter,
                behance: payload.behance,
                artstation: payload.artstation,
            },
        });
        return user;
    }
};
exports.LinksService = LinksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LinksService);
//# sourceMappingURL=links.service.js.map