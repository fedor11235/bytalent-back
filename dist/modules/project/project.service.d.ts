import { PrismaService } from '../prisma/prisma.service';
export declare class ProjectService {
    private prisma;
    constructor(prisma: PrismaService);
    getActiveProjects(dataUser: any): Promise<any>;
    getAllProjects(): Promise<any>;
    createProject(dataUser: any, payload: any): Promise<any>;
    deleteProject(id: number): Promise<any>;
    getAllUserProjects(dataUser: any): Promise<any>;
    uploadFileProject(dataUser: any, projectId: number, payload: any): Promise<any>;
    getBackgrounds(dataUser: any): Promise<any>;
    selectBackground(projectId: number, backgroundId: number): Promise<any>;
    postBackgrounds(dataUser: any, payload: any): Promise<any>;
    deleteBackgrounds(id: number): Promise<any>;
    orderVisualization(dataUser: any, payload: any): Promise<any>;
    updateProject(projectId: number, payload: any): Promise<any>;
}
