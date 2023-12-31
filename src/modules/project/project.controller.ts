import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Get,
  Post,
  Delete,
  Body,
  UseInterceptors,
  UseGuards,
  Param,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { ProjectService } from './project.service';
import { FileInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { CreateProjectDTO } from '../../dto/project/createProject.dto';
import { DeleteProjectDTO } from '../../dto/project/deleteProject.dto';
import { ParamsFileProjectDTO } from '../../dto/project/paramsFileProject.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @ApiOperation({ summary: 'Get all projects' })
  @Get('all')
  async getAllProjects(@Res() res) {
    const projectReq = await this.projectService.getAllProjects();
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Get active project' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('active')
  async getActiveProjects(@Res() res, @Req() req) {
    const projectReq = await this.projectService.getActiveProjects(req.user);
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Get active project' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('number')
  async getAllUserProjects(@Res() res, @Req() req) {
    const projectReq = await this.projectService.getAllUserProjects(req.user);
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Delete background' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete('project/:id')
  async deleteProject(@Res() res, @Param() params: DeleteProjectDTO) {
    const projectReq = await this.projectService.deleteProject(
      Number(params.id),
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Create project' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('create')
  @UseInterceptors(FileInterceptor('formdata'))
  async createProject(
    @Res() res,
    @Req() req,
    @Body() createProjectDTO: CreateProjectDTO,
  ) {
    const projectReq = await this.projectService.createProject(
      req.user,
      createProjectDTO,
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Upload file project' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
            description: 'Files project',
          },
        },
      },
    },
  })
  @UseInterceptors(AnyFilesInterceptor())
  @Post('upload/:id')
  async uploadFileProject(
    @Res() res,
    @Req() req,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param() params: ParamsFileProjectDTO,
  ) {
    const projectReq = await this.projectService.uploadFileProject(
      req.user,
      params.id,
      files,
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Get backgrounds' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('backgrounds/:projectId')
  async getBackgrounds(@Res() res, @Req() req, @Param() params: any,) {
    const projectReq = await this.projectService.getBackgrounds(params.projectId);
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Post background' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description: 'Background project',
        },
      },
    },
  })
  @Post('backgrounds/:projectId')
  async postBackgrounds(
    @Res() res,
    @Req() req,
    @Param() params: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const projectReq = await this.projectService.postBackgrounds(
      req.user,
      file,
      Number(params.projectId)
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Delete background' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete('backgrounds/:id')
  async deleteBackgrounds(@Res() res, @Param() params: DeleteProjectDTO) {
    const projectReq = await this.projectService.deleteBackgrounds(
      Number(params.id),
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Update backgrounds' })
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('formdata'))
  @UseGuards(AuthGuard)
  @Post('update/:id')
  async updateProject(
    @Res() res,
    @Param() params: DeleteProjectDTO,
    @Body() body: any,
  ) {
    const projectReq = await this.projectService.updateProject(
      Number(params.id),
      body,
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Select background' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('background/:projectId/:backgroundId')
  async selectBackground(@Res() res, @Param() params: any) {
    const projectReq = await this.projectService.selectBackground(
      Number(params.projectId),
      Number(params.backgroundId),
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }
}
