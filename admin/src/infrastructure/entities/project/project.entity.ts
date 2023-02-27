import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectPhoto } from '../project-photo/project-photo.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  projectId: string;

  @Column()
  startdate: string;

  @Column({ nullable: true })
  enddate: string;

  @OneToMany(() => ProjectPhoto, (photo) => photo.project)
  images: ProjectPhoto[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
