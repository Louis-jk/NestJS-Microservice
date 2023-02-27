import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../project/project.entity';

@Entity()
export class ProjectPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Project, (project) => project.images)
  project: Project;
}
