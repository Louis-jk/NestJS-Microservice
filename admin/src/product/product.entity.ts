import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'nest_micro_db', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 30 })
  title: string;

  @Column('varchar', { name: 'image', length: 255 })
  image: string;
}
