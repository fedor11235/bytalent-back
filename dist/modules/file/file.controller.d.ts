import type { Response } from 'express';
import { StreamableFile } from '@nestjs/common';
import { FileService } from './file.service';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    getFileBg(res: Response, params: any): StreamableFile;
    getFilePoster(res: Response, params: any): StreamableFile;
}
