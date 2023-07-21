import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LegalService {
  constructor(private prisma: PrismaService) {}
  async getLegalSettings(): Promise<any> {
    return true;
  }
  async setLegalSettings(payload: any): Promise<any> {
    return true;
  }
}
