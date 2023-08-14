import { PrismaService } from '../prisma/prisma.service';
export declare class LegalService {
    private prisma;
    constructor(prisma: PrismaService);
    getLegalSettings(dataUser: any): Promise<any>;
    setLegalSettings(dataUser: any, payload: any): Promise<any>;
}
