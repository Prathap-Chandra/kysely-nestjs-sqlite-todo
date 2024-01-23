import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        filename: configService.get('filename'),
      }),
    }),
    TodoModule,
    FruitsModule,
  ],
})
export class AppModule {}
