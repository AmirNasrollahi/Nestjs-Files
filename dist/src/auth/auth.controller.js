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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dtos/login.dto");
const register_dto_1 = require("./dtos/register.dto");
const jwt_1 = require("@nestjs/jwt");
const auth_guard_1 = require("./guards/login auth guard/auth.guard");
const jwt_guard_1 = require("./guards/jwt guard/jwt.guard");
let AuthController = class AuthController {
    constructor(Authserv, jwtserv) {
        this.Authserv = Authserv;
        this.jwtserv = jwtserv;
    }
    async Register(body) {
        const user = await this.Authserv.Createuser(body);
        return user;
    }
    async Login(body, rqs) {
        const Token = this.jwtserv.sign({
            id: rqs.user.id,
            name: rqs.user.name,
            email: rqs.user.email,
            role: rqs.user.role
        });
        await this.Authserv.createtoken(rqs.user.id, Token);
        return "Token saved";
    }
    profile(rqs) {
        return rqs.user;
    }
    async logout(rqs) {
        await this.Authserv.removetoken(rqs.user.id);
        return { message: 'User Logout' };
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.registerdto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Register", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.Authguarde),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.logindto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "Login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.Jwtguard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "profile", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.Jwtguard),
    (0, common_1.Post)('/logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map