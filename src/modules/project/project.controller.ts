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
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { GetProjectDTO } from '../../dto/project/getProject.dto';
import { SetProjectDTO } from '../../dto/project/setProject.dto';
import { OrderVisualizationDTO } from '../../dto/project/orderVisualization.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @ApiOperation({ summary: 'Get active project' })
  @ApiBearerAuth()
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

  @ApiOperation({ summary: 'Order visualization' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('order')
  @UseInterceptors(FileInterceptor('formdata'))
  async orderVisualization(
    @Res() res,
    @Req() req,
    @Body() orderVisualizationDTO: OrderVisualizationDTO,
  ) {
    const projectReq = await this.projectService.orderVisualization(
      req.user,
      orderVisualizationDTO,
    );
    return res.status(HttpStatus.OK).json(projectReq);
  }

  @ApiOperation({ summary: 'Get backgrounds' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('backgrounds')
  async getBackgrounds(@Res() res, @Req() req) {
    const projectReq = await this.projectService.getBackgrounds(req.user);
    return res.status(HttpStatus.OK).json(projectReq);
  }
}
