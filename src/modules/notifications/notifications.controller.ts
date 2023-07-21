import { Controller, Res, HttpStatus, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @ApiOperation({ summary: 'Get all notifications' })
  @Get('active')
  async getActiveProject(@Res() res) {
    const notificationsReq =
      await this.notificationsService.getAllNotifications();
    return res.status(HttpStatus.OK).json(notificationsReq);
  }
}
