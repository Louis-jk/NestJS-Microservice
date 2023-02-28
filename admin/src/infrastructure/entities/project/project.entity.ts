import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../image/image.entity';

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

  @OneToMany(() => Image, (image) => image.project)
  images: Image[];

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
