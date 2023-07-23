import { ApiProperty } from '@nestjs/swagger';

export class GetNotificationsDTO {
  @ApiProperty({
    description: 'Notifications total',
    required: true,
  })
  total: number;

  @ApiProperty({
    description: 'Notification date',
    required: true,
  })
  notifications: GetNotificationDTO[];
}

class GetNotificationDTO {
  @ApiProperty({
    description: 'Notification text',
    required: true,
  })
  text: string;

  @ApiProperty({
    description: 'Notification date',
    required: true,
  })
  date: Date;
}
