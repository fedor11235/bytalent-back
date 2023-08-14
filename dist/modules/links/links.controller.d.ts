import { LinksService } from './links.service';
import { SetLinksDTO } from '../../dto/links/setLinks.dto';
export declare class LinksController {
    private linksService;
    constructor(linksService: LinksService);
    getLinksSettings(res: any, req: any): Promise<any>;
    setLinksSettings(res: any, req: any, linksDTO: SetLinksDTO): Promise<any>;
}
