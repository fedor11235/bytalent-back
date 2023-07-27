import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}
  async getAllNotifications(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
      include: {
        notifications: true
      }
    });
    return {
      notifications: user.notifications
    };
  }
}
