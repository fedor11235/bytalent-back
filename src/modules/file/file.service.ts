import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}
  async getFile(dataUser: any): Promise<any> {
    return 'ok';
  }
}
