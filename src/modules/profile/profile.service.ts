import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async getProfileSettings(): Promise<any> {
    return true;
  }
  async setProfileSettings(payload: any): Promise<any> {
    return true;
  }
}
