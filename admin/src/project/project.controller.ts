import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/project.dto';

@Controller('projects')
export class ProJectController {
  constructor(private projectService: ProjectService) {}

  @Post()
  createProject(@Body() newProject: CreateProjectDto) {
    return this.projectService.createProject(newProject);
  }
}
