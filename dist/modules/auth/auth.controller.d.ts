import { AuthService } from './auth.service';
import { testAuthDTO } from '../../dto/auth/testAuth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    loginUser(res: any, authDTO: testAuthDTO): Promise<any>;
    loginTelegramUser(res: any, authDTO: testAuthDTO): Promise<any>;
    loginAppleUser(res: any, authDTO: testAuthDTO): Promise<any>;
    logout(res: any): Promise<any>;
}
