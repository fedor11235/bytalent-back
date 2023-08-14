import { SecurityService } from './security.service';
import { SetSecurityDTO } from '../../dto/security/setSecurity.dto';
export declare class SecurityController {
    private securityService;
    constructor(securityService: SecurityService);
    getSecuritySettings(res: any, req: any): Promise<any>;
    setSecuritySettings(res: any, securityDTO: SetSecurityDTO): Promise<any>;
}
