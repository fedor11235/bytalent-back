import {
  Controller,
  Res,
  Req,
  HttpStatus,
  Get,
  Post,
  Body,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
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
  @UseGuards(AuthGuard)
  @Get('active')
  async getActiveProjects(@Res() res, @Req() req) {
    const projectReq = await this.projectService.getActiveProjects(req.user);
    return res.status(HttpStatus.OK).json(projectReq);
  }
}
