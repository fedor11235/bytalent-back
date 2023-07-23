import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

type LoginPayload = {
  login: string
  password: string
}

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async loginUser(payload: LoginPayload): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email: payload.login }
    });
    if (user) return user
    return await this.prisma.user.create({
      data: { email: payload.login }
    });
  }
  async registryUser(payload: any): Promise<any> {
    return true;
  }
  async logout(payload: any): Promise<any> {
    return true;
  }
  async deleteUser(payload: any): Promise<any> {
    return true;
  }
}
