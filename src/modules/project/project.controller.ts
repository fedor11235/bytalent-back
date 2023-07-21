import {
  Controller,
  Res,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { GetProjectDTO } from '../../dto/project/getProject.dto';
import { SetProjectDTO } from '../../dto/project/setProject.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @ApiOperation({ summary: 'Get active project' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: GetProjectDTO,
  })
  @Get('active')
  async getActiveProject(@Res() res) {
    const projectReq = await this.projectService.getActiveProject();
    return res.status(HttpStatus.OK).json(projectReq);
  }
}
