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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const exceptions_1 = require("@nestjs/common/exceptions");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path = require("path");
const update_dto_1 = require("./dtos/update.dto");
const user_dto_1 = require("./dtos/user.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userserv) {
        this.userserv = userserv;
    }
    async users() {
        const Userlist = await this.userserv.userlist();
        return Userlist;
    }
    async user(userid) {
        const User = await this.userserv.user(userid);
        if (User) {
            return User;
        }
        throw new common_1.NotFoundException('User not found');
    }
    async createuser(body) {
        const newuser = await this.userserv.Createuser(body);
        return newuser;
    }
    async updateuser(body, id) {
        const Userup = await this.userserv.Updateuser(body, id);
        return Userup;
    }
    async deleteuser(userid) {
        const dltuser = await this.userserv.Deleteuser(userid);
        if (dltuser) {
            return "User Deleted";
        }
        throw new common_1.NotFoundException('User not found');
    }
    uploadfile(body, image) {
        console.log(body, image);
    }
    showfile(imgname, res) {
        return res.sendfile(imgname, { root: './uploadfiles' });
    }
    test1() {
        return 'version1';
    }
    test2() {
        return 'version2';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "users", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "user", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: user_dto_1.createUserdto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.createUserdto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createuser", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateUserdto, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateuser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteuser", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploadfiles',
            filename: (req, file, cb) => {
                const flname = path.parse(file.originalname).name;
                const ext = path.parse(file.originalname).ext;
                cb(null, `${flname}-${Date.now()}${ext}`);
            }
        }),
        fileFilter: (req, file, cb) => {
            const flname = path.parse(file.originalname).name;
            const ext = path.parse(file.originalname).ext;
            if (ext !== '.png') {
                return cb(new exceptions_1.BadRequestException('file type error'), false);
            }
            return cb(null, true);
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadfile", null);
__decorate([
    (0, common_1.Get)('image/:imgname'),
    __param(0, (0, common_1.Param)('imgname')),
    __param(1, (0, decorators_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "showfile", null);
__decorate([
    (0, decorators_1.Version)('1'),
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "test1", null);
__decorate([
    (0, decorators_1.Version)('2'),
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "test2", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map