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
exports.GetProfileDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetProfileDTO {
}
exports.GetProfileDTO = GetProfileDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User name',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User surname',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User organization',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User position',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User phone',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email',
        required: true,
    }),
    __metadata("design:type", String)
], GetProfileDTO.prototype, "email", void 0);
//# sourceMappingURL=getProfile.dto.js.map