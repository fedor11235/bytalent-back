import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async loginUser(payload: any): Promise<any> {
    return true;
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
