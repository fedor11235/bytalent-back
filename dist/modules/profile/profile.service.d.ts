import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class ProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfileSettings(dataUser: any): Promise<any>;
    setProfileSettings(dataUser: any, payload: any): Promise<User>;
}
