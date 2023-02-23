import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProJectController {
  @Get()
  all() {
    return 'all projects';
  }
}
