import { ApiProperty } from '@nestjs/swagger';

export class SetNotificationDTO {
  @ApiProperty({ description: 'Notification text' })
  text: string;

  @ApiProperty({ description: 'Notification date' })
  date: Date;
}
