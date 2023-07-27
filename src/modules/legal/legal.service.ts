import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LegalService {
  constructor(private prisma: PrismaService) {}
  async getLegalSettings(data: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: data.sub },
    });
    return {
      companyName: user.companyName,
      organizationalForms: user.organizationalForms,
      OGRN: user.OGRN,
      INN: user.INN,
      BankBIC: user.BankBIC,
      CheckingAccount: user.CheckingAccount,
    };
  }
  async setLegalSettings(payload: any): Promise<any> {
    return true;
  }
}
