import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';
import { FruitsRepository } from './fruits.repository';

@Module({
  imports: [],
  controllers: [FruitsController],
  providers: [FruitsService, FruitsRepository],
})
export class FruitsModule {}
