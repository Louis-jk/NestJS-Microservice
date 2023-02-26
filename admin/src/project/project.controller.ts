import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';
import { Project } from 'src/project/entity/project.entity';

@Controller('projects')
export class ProJectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  createProject(@Body() newProject: CreateProjectDto): Promise<void> {
    return this.projectService.create(newProject);
  }

  @Get()
  getAllProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  getProject(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Delete(':id')
  deleteProject(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectService.remove(id);
  }
}
