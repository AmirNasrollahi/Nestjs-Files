"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const local_strateghy_1 = require("./guards/login auth guard/local.strateghy");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./guards/jwt guard/jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strateghy_1.Authstrateghy, jwt_strategy_1.Jwtstrategy],
        imports: [prisma_module_1.PrismaModule, passport_1.PassportModule, jwt_1.JwtModule.register({
                secret: "amirali",
                signOptions: { expiresIn: "1d" }
            })]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map