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
      companyName: user.company_name,
      organizationalForms: user.organizational_forms,
      oGRN: user.ogrn,
      iNN: user.inn,
      bankBIC: user.bank_bic,
      checkingAccount: user.checking_account,
    };
  }
  async setLegalSettings(dataUser: any, payload: any): Promise<any> {
    const user = await this.prisma.user.update({
      where: { id: dataUser.sub },
      data: {
        company_name: payload.companyName,
        organizational_forms: payload.organizationalForms,
        ogrn: payload.oGRN,
        inn: payload.iNN,
        bank_bic: payload.bankBIC,
        checking_account: payload.checkingAccount,
      },
    });
    return user;
  }
}
