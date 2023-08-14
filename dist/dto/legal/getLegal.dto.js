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
exports.GetLegalDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetLegalDTO {
}
exports.GetLegalDTO = GetLegalDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User company name',
        required: true,
    }),
    __metadata("design:type", Number)
], GetLegalDTO.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User organizational forms',
        required: true,
    }),
    __metadata("design:type", String)
], GetLegalDTO.prototype, "organizationalForms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User OGRN',
        required: true,
    }),
    __metadata("design:type", String)
], GetLegalDTO.prototype, "OGRN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User INN',
        required: true,
    }),
    __metadata("design:type", String)
], GetLegalDTO.prototype, "INN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Bank BIC',
        required: true,
    }),
    __metadata("design:type", String)
], GetLegalDTO.prototype, "BankBIC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User checking account',
        required: true,
    }),
    __metadata("design:type", String)
], GetLegalDTO.prototype, "CheckingAccount", void 0);
//# sourceMappingURL=getLegal.dto.js.map