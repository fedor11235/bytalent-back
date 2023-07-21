import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LinksService {
  constructor(private prisma: PrismaService) {}
  async getLinksSettings(): Promise<any> {
    return true;
  }
  async setLinksSettings(payload: any): Promise<any> {
    return true;
  }
}
