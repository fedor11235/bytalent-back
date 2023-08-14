import { PrismaService } from '../prisma/prisma.service';
export declare class SecurityService {
    private prisma;
    constructor(prisma: PrismaService);
    getSecuritySettings(data: any): Promise<any>;
    setSecuritySettings(payload: any): Promise<any>;
}
