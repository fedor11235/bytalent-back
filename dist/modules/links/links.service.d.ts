import { PrismaService } from '../prisma/prisma.service';
export declare class LinksService {
    private prisma;
    constructor(prisma: PrismaService);
    getLinksSettings(dataUser: any): Promise<any>;
    setLinksSettings(dataUser: any, payload: any): Promise<any>;
}
