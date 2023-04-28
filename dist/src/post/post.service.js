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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createpost(post, id) {
        const newpost = this.prisma.post.create({
            data: {
                title: post.title,
                body: post.body,
                userid: id
            }
        });
        return newpost;
    }
    async removepost(id) {
        await this.prisma.post.delete({
            where: { id: id }
        });
        return "post Deleted";
    }
    async updatepost(body, id) {
        const post = await this.prisma.post.update({
            where: {
                id: id
            },
            data: {
                title: body.title
            },
            select: {
                title: true,
                userid: true
            }
        });
        return post;
    }
    async showallpost() {
        const posts = await this.prisma.post.findMany();
        return posts;
    }
    async showpost(Userid) {
        const post = await this.prisma.post.findMany({
            where: {
                userid: Userid
            },
            select: {
                id: true,
                title: true,
            }
        });
        return post;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map