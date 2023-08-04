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
} from '@nestjs/common';
import { AuthGuard } from './../auth/auth.guard';
import { ProjectService } from './project.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBearerAuth,
  ApiConsumes,
} from '@nestjs/swagger';
import { GetProjectDTO } from '../../dto/project/getProject.dto';
import { SetProjectDTO } from '../../dto/project/setProject.dto';
import { PostBackgroundDTO } from '../../dto/project/postBackground.dto';
import { UploadFileProjectDTO } from '../../dto/project/uploadFileProject.dto';
import { DeleteProjectDTO } from '../../dto/project/deleteProject.dto';
import { OrderVisualizationDTO } from '../../dto/project/orderVisualization.dto';
import { ParamsFileProjectDTO } from '../../dto/project/paramsFileProject.dto';

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
  @ApiOperation({ summary: 'Upload file project' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @Post('upload/:id')
  async uploadFileProject(
    @Res() res,
    @Req() req,
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamsFileProjectDTO,
    @Body() payload: UploadFileProjectDTO,
  ) {
    const projectReq = await this.projectService.uploadFileProject(
      req.user,
      params.id,
      file,
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
  @ApiOperation({ summary: 'Post background' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @Post('backgrounds')
  async postBackgrounds(
    @Res() res,
    @Req() req,
    @UploadedFile() file: Express.Multer.File,
    @Body() payload: PostBackgroundDTO,
  ) {
    const projectReq = await this.projectService.postBackgrounds(
      req.user,
      file,
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
}
