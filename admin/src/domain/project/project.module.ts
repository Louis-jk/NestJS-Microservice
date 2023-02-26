import { Module } from '@nestjs/common';
import { ProJectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '@infrastructure/entities/project/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProJectController],
  providers: [ProjectService],
})
export class ProjectModule {}
