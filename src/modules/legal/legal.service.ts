import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class LegalService {
  constructor(private prisma: PrismaService) {}
  async getLegalSettings(dataUser: any): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { id: dataUser.sub },
    });
    return {
      companyName: user.companyName,
      organizationalForms: user.organizationalForms,
      oGRN: user.OGRN,
      iNN: user.INN,
      bankBIC: user.BankBIC,
      checkingAccount: user.CheckingAccount,
    };
  }
  async setLegalSettings(dataUser: any, payload: any): Promise<any> {
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: {
        companyName: payload.companyName,
        organizationalForms: payload.organizationalForms,
        OGRN: payload.oGRN,
        INN: payload.iNN,
        BankBIC: payload.bankBIC,
        CheckingAccount: payload.checkingAccount,
      },
    });
    return user;
  }
}
