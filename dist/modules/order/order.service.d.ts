import { PrismaService } from '../prisma/prisma.service';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllOrders(): Promise<any>;
    makeOrder(dataUser: any, payload: any): Promise<any>;
}
