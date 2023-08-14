import { CommerceService } from './commerce.service';
import { SetCommerceDTO } from '../../dto/commerce/setCommerce.dto';
export declare class CommerceController {
    private commerceService;
    constructor(commerceService: CommerceService);
    getCommerceSettings(res: any, req: any): Promise<any>;
    setCommerceSettings(res: any, commerceDTO: SetCommerceDTO): Promise<any>;
}
