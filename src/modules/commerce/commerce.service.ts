import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class CommerceService {
  constructor(private prisma: PrismaService) {}
  async getCommerceSettings(): Promise<any> {
    return true;
  }
  async setCommerceSettings(payload: any): Promise<any> {
    return true;
  }
}
