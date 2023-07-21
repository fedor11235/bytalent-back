import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService
  ) {}
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async loginUser(body: any): Promise<any> {
    return true;
  }
  async registryUser(body: any): Promise<any> {
    return true;
  }
  async logout(body: any): Promise<any> {
    return true;
  }
  async deleteUser(body: any): Promise<any> {
    return true;
  }
}