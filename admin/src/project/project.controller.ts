import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';
import { Project } from 'src/entities/project.entity';

@Controller('projects')
export class ProJectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  getAllProjects() {
    return this.projectService.getAllProject();
  }

  @Post()
  createProject(@Body() newProject: CreateProjectDto) {
    return this.projectService.createProject(newProject);
  }

  @Get(':id')
  getProject(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    return this.projectService.getProject(id);
  }
}
