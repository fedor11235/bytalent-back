import { Module } from '@nestjs/common';
import { CommerceController } from './commerce.controller';
import { CommerceService } from './commerce.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CommerceController],
  providers: [CommerceService, PrismaService],
})
export class CommerceModule {}
