import { Controller, Res, HttpStatus, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { NotificationsService } from './notifications.service';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetNotificationsDTO } from '../../dto/notification/getNotification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @ApiOperation({ summary: 'Get all notifications' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetNotificationsDTO,
  })
  @UseGuards(AuthGuard)
  @Get()
  async getActiveProject(@Res() res) {
    const notificationsReq =
      await this.notificationsService.getAllNotifications();
    return res.status(HttpStatus.OK).json(notificationsReq);
  }
}
