"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authguarde = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
let Authguarde = class Authguarde extends (0, passport_1.AuthGuard)('local') {
};
Authguarde = __decorate([
    (0, common_1.Injectable)()
], Authguarde);
exports.Authguarde = Authguarde;
//# sourceMappingURL=auth.guard.js.map