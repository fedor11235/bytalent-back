import { OrderService } from './order.service';
import { MakeOrderDTO } from '../../dto/order/makeOrder.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getAllOrders(res: any): Promise<any>;
    makeOrder(res: any, req: any, makeOrderDTO: MakeOrderDTO): Promise<any>;
}
