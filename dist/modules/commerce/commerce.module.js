"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommerceModule = void 0;
const common_1 = require("@nestjs/common");
const commerce_controller_1 = require("./commerce.controller");
const commerce_service_1 = require("./commerce.service");
const prisma_service_1 = require("../prisma/prisma.service");
let CommerceModule = exports.CommerceModule = class CommerceModule {
};
exports.CommerceModule = CommerceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [commerce_controller_1.CommerceController],
        providers: [commerce_service_1.CommerceService, prisma_service_1.PrismaService],
    })
], CommerceModule);
//# sourceMappingURL=commerce.module.js.map