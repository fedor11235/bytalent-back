import { ProfileService } from './profile.service';
import { SetProfileDTO } from '../../dto/profile/setProfile.dto';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    getProfileSettings(res: any, req: any): Promise<any>;
    setProfileSettings(res: any, req: any, profileDTO: SetProfileDTO): Promise<any>;
}
