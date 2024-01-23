import { Injectable } from '@nestjs/common';
import { FruitsRepository } from './fruits.repository';
import { Fruits } from './fruits.model';

@Injectable()
export class FruitsService {
  constructor(private readonly fruitsRepository: FruitsRepository) {}

  getAll(): Promise<Fruits[]> {
    return this.fruitsRepository.getAll();
  }
}
