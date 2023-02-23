import { Module } from '@nestjs/common';
import { ProJectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { ProjectService } from './project.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProJectController],
  providers: [ProjectService],
})
export class ProjectModule {}
