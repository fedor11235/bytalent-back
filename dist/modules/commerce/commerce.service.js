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
exports.CommerceService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommerceService = exports.CommerceService = class CommerceService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCommerce(data) {
        const user = await this.prisma.user.findFirst({
            where: { id: data.sub },
            include: {
                notifications: {
                    where: {
                        OR: [{ type: 'operation_history' }, { type: 'invoice_payments' }],
                    },
                },
            },
        });
        return {
            balance: user.balance,
            invoicePayments: user.notifications.filter((notification) => notification.type === 'invoice_payments'),
            operationsHistory: user.notifications.filter((notification) => notification.type === 'operation_history'),
        };
    }
    async setCommerce(payload) {
        return true;
    }
};
exports.CommerceService = CommerceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommerceService);
//# sourceMappingURL=commerce.service.js.map