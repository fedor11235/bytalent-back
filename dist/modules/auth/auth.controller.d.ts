import { AuthService } from './auth.service';
import { testAuthDTO } from '../../dto/auth/testAuth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginUser(res: any, authDTO: testAuthDTO): Promise<any>;
    registrationTelegramUser(res: any, authDTO: testAuthDTO): Promise<any>;
    registrationAppleUser(res: any, authDTO: testAuthDTO): Promise<any>;
    logout(res: any): Promise<any>;
}
