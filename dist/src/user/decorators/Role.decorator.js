"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const common_1 = require("@nestjs/common");
const Role = (...roles) => {
    return (0, common_1.SetMetadata)("roles", roles);
};
exports.Role = Role;
//# sourceMappingURL=Role.decorator.js.map