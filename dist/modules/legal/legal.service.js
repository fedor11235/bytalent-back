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
exports.LegalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LegalService = exports.LegalService = class LegalService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLegalSettings(dataUser) {
        const user = await this.prisma.user.findFirst({
            where: { id: dataUser.sub },
        });
        return {
            companyName: user.company_name,
            organizationalForms: user.organizational_forms,
            oGRN: user.ogrn,
            iNN: user.inn,
            bankBIC: user.bank_bic,
            checkingAccount: user.checking_account,
        };
    }
    async setLegalSettings(dataUser, payload) {
        const user = await this.prisma.user.update({
            where: { id: dataUser.sub },
            data: {
                company_name: payload.companyName,
                organizational_forms: payload.organizationalForms,
                ogrn: payload.oGRN,
                inn: payload.iNN,
                bank_bic: payload.bankBIC,
                checking_account: payload.checkingAccount,
            },
        });
        return user;
    }
};
exports.LegalService = LegalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LegalService);
//# sourceMappingURL=legal.service.js.map