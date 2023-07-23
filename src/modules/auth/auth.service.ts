import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

type LoginPayload = {
  login: string
  password: string
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}
  async loginUser(payload: LoginPayload): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email: payload.login }
    });
    if (user) {
      return {
        access_token: await this.jwtService.signAsync({sub: user.id}),
      };
    } 
    const newUser =  await this.prisma.user.create({
      data: { email: payload.login }
    });
    return {
      access_token: await this.jwtService.signAsync({sub: newUser.id}),
    };
  }
  async registryUser(payload: any): Promise<any> {
    return true;
  }
  async logout(): Promise<any> {
    return true;
  }
  async deleteUser(payload: any): Promise<any> {
    return true;
  }
}
