import { Controller, Get } from '@nestjs/common';
import { FruitsService } from './fruits.service';
import { Fruits } from './fruits.model';
@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Get('/')
  getAll(): Promise<Fruits[]> {
    return this.fruitsService.getAll();
  }
}
