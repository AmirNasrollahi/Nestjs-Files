"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwtguard = void 0;
const injectable_decorator_1 = require("@nestjs/common/decorators/core/injectable.decorator");
const passport_1 = require("@nestjs/passport");
let Jwtguard = class Jwtguard extends (0, passport_1.AuthGuard)('jwt') {
};
Jwtguard = __decorate([
    (0, injectable_decorator_1.Injectable)()
], Jwtguard);
exports.Jwtguard = Jwtguard;
//# sourceMappingURL=jwt.guard.js.map