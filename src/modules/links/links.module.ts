import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [LinksController],
  providers: [LinksService, PrismaService],
})
export class LinksModule {}
