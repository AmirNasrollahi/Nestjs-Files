"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roleguard = void 0;
const common_1 = require("@nestjs/common");
(0, common_1.Injectable)();
class Roleguard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const { user } = context.switchToHttp().getRequest();
        console.log(user);
        const roles = this.reflector.get("roles", context.getHandler());
        return roles.some((role) => { role === user.role; });
    }
}
exports.Roleguard = Roleguard;
//# sourceMappingURL=role.guard.js.map