import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CommerceModule } from './modules/commerce/commerce.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LegalModule } from './modules/legal/legal.module';
import { LinksModule } from './modules/links/links.module';
import { SecurityModule } from './modules/security/security.module';
import { ProjectModule } from './modules/project/project.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OrderModule } from './modules/order/order.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
    AuthModule,
    CommerceModule,
    ProfileModule,
    LegalModule,
    LinksModule,
    SecurityModule,
    ProjectModule,
    NotificationsModule,
    OrderModule
  ],
})
export class AppModule {}
