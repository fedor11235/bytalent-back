import { LegalService } from './legal.service';
import { SetLegalDTO } from '../../dto/legal/setLegal.dto';
export declare class LegalController {
    private legalService;
    constructor(legalService: LegalService);
    getLegalSettings(res: any, req: any): Promise<any>;
    setLegalSettings(res: any, req: any, legalDTO: SetLegalDTO): Promise<any>;
}
