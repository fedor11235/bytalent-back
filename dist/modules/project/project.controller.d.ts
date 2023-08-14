/// <reference types="multer" />
import { ProjectService } from './project.service';
import { CreateProjectDTO } from '../../dto/project/createProject.dto';
import { DeleteProjectDTO } from '../../dto/project/deleteProject.dto';
import { ParamsFileProjectDTO } from '../../dto/project/paramsFileProject.dto';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    getAllProjects(res: any): Promise<any>;
    getActiveProjects(res: any, req: any): Promise<any>;
    getAllUserProjects(res: any, req: any): Promise<any>;
    createProject(res: any, req: any, createProjectDTO: CreateProjectDTO): Promise<any>;
    uploadFileProject(res: any, req: any, files: Array<Express.Multer.File>, params: ParamsFileProjectDTO): Promise<any>;
    getBackgrounds(res: any, req: any): Promise<any>;
    postBackgrounds(res: any, req: any, file: Express.Multer.File): Promise<any>;
    deleteBackgrounds(res: any, params: DeleteProjectDTO): Promise<any>;
}
