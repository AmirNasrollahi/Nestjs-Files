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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const POST_1 = require("../typeorm/entitie/POST");
const USERS_1 = require("../typeorm/entitie/USERS");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userrepository, postrepository) {
        this.userrepository = userrepository;
        this.postrepository = postrepository;
    }
    async userlist() {
        const Userlist = await this.userrepository.find({ relations: ['post'] });
        return Userlist;
    }
    async user(Userid) {
        const User = await this.userrepository.findOne({
            where: {
                id: Userid
            }
        });
        return User;
    }
    async Createuser(user) {
        const User = await this.userrepository.create({
            Email: user.email,
            password: user.password,
            createat: new Date()
        });
        await this.userrepository.save(User);
        return User;
    }
    async Updateuser(body, id) {
        const updateduser = await this.userrepository.update({ id }, Object.assign({}, body));
        return updateduser;
    }
    async Deleteuser(id) {
        const User = await this.userrepository.delete({ id });
        return User;
    }
    async CreateUserPost(id, postdetails) {
        const user = await this.userrepository.findOneBy({ id });
        if (!user) {
            throw new common_1.BadRequestException();
        }
        const createpost = this.postrepository.create(Object.assign({}, postdetails));
        const newpost = await this.postrepository.save(createpost);
        user.post = newpost;
        this.userrepository.save(user);
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(USERS_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(POST_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map