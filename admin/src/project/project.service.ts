import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  createProject(project: CreateProjectDto) {
    const newProject = this.projectRepository.create(project);
    return this.projectRepository.save(newProject);
  }

  getAllProject() {
    return this.projectRepository.find();
  }
}
