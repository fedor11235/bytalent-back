import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class SecurityService {
  constructor(private prisma: PrismaService) {}
  async getSecuritySettings(): Promise<any> {
    return true;
  }
  async setSecuritySettings(payload: any): Promise<any> {
    return true;
  }
}
