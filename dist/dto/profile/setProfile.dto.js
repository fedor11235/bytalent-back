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
exports.SetProfileDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class SetProfileDTO {
}
exports.SetProfileDTO = SetProfileDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User name' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User surname' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User organization' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "organization", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User position' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User phone' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], SetProfileDTO.prototype, "email", void 0);
//# sourceMappingURL=setProfile.dto.js.map