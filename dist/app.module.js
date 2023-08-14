"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const commerce_module_1 = require("./modules/commerce/commerce.module");
const profile_module_1 = require("./modules/profile/profile.module");
const legal_module_1 = require("./modules/legal/legal.module");
const links_module_1 = require("./modules/links/links.module");
const security_module_1 = require("./modules/security/security.module");
const project_module_1 = require("./modules/project/project.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const order_module_1 = require("./modules/order/order.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            commerce_module_1.CommerceModule,
            profile_module_1.ProfileModule,
            legal_module_1.LegalModule,
            links_module_1.LinksModule,
            security_module_1.SecurityModule,
            project_module_1.ProjectModule,
            notifications_module_1.NotificationsModule,
            order_module_1.OrderModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map