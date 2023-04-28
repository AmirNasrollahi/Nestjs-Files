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
exports.Authstrateghy = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../../auth.service");
let Authstrateghy = class Authstrateghy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(Authserv) {
        super({ usernameField: 'email' });
        this.Authserv = Authserv;
    }
    async validate(email, password) {
        const user = await this.Authserv.validate(email, password);
        if (user) {
            return user;
        }
        throw new common_1.NotFoundException('User with this email and password not found ');
    }
};
Authstrateghy = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], Authstrateghy);
exports.Authstrateghy = Authstrateghy;
//# sourceMappingURL=local.strateghy.js.map