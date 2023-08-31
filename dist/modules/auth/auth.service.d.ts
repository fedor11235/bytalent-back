import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    loginUser(payload: any): Promise<any>;
    registrationTelegramUser(payload: any): Promise<any>;
    loginAppleUser(payload: any): Promise<any>;
}
