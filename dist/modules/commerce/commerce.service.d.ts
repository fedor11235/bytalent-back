import { PrismaService } from '../prisma/prisma.service';
export declare class CommerceService {
    private prisma;
    constructor(prisma: PrismaService);
    getCommerce(data: any): Promise<any>;
    setCommerce(payload: any): Promise<any>;
}
