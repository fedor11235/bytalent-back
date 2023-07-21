import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CommerceModule } from './modules/commerce/commerce.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LegalModule } from './modules/legal/legal.module';
import { LinksModule } from './modules/links/links.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [AuthModule, CommerceModule, ProfileModule, LegalModule, LinksModule, SecurityModule],
})
export class AppModule {}
