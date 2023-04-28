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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Createuser(data) {
        const password = await bcrypt.hash(data.password, 10);
        const User = await this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        });
        return User;
    }
    async validate(Email, Password) {
        const User = await this.prisma.user.findUnique({
            where: {
                email: Email
            }
        });
        if (!User) {
            throw new common_1.BadRequestException();
        }
        if (!await bcrypt.compare(Password, User.password)) {
            throw new common_1.UnauthorizedException();
        }
        else {
            return User;
        }
    }
    async validateuserbutoken(id) {
        const User = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
        if (!User || User.token === null) {
            throw new common_1.UnauthorizedException();
        }
        else {
            return User;
        }
    }
    async createtoken(userid, Token) {
        const user = await this.prisma.user.update({
            where: {
                id: userid
            },
            data: {
                token: Token
            }
        });
        return user;
    }
    async removetoken(id) {
        const user = await this.prisma.user.update({
            where: {
                id
            },
            data: {
                token: null
            }
        });
        return "Removed Token";
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map