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
exports.SetLinksDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class SetLinksDTO {
}
exports.SetLinksDTO = SetLinksDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User website' }),
    __metadata("design:type", Number)
], SetLinksDTO.prototype, "website", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User telegram' }),
    __metadata("design:type", String)
], SetLinksDTO.prototype, "telegram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User instagram' }),
    __metadata("design:type", String)
], SetLinksDTO.prototype, "instagram", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User twitter' }),
    __metadata("design:type", String)
], SetLinksDTO.prototype, "twitter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User behance' }),
    __metadata("design:type", String)
], SetLinksDTO.prototype, "behance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User artstation' }),
    __metadata("design:type", String)
], SetLinksDTO.prototype, "artstation", void 0);
//# sourceMappingURL=setLinks.dto.js.map