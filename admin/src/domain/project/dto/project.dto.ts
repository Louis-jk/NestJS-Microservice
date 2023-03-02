import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  projectname: string;

  @IsNotEmpty()
  startdate: string;

  enddate?: string;
}
