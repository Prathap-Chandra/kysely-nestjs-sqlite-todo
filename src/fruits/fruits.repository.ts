import { Injectable } from '@nestjs/common';
import { Fruits } from './fruits.model';
import { Database } from '../database/database';

@Injectable()
export class FruitsRepository {
  constructor(private readonly database: Database) {}

  async getAll() {
    const databaseResponse = await this.database
      .selectFrom('fruits')
      .selectAll()
      .execute();

    console.log(databaseResponse);
    return databaseResponse.map((fruits) => new Fruits(fruits));
  }
}
