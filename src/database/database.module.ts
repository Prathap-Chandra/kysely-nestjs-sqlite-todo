import { Global, Logger, Module } from '@nestjs/common';
import { Database } from './database';
import { DatabaseOptions } from './databaseOptions';
import {
  ConfigurableDatabaseModule,
  DATABASE_OPTIONS,
} from './database.module-definition';
import { Kysely, LogEvent, SqliteDialect } from 'kysely';
import * as SQLite from 'better-sqlite3';

@Global()
@Module({
  exports: [Database],
  providers: [
    {
      provide: Database,
      inject: [DATABASE_OPTIONS],
      useFactory: (databaseOptions: DatabaseOptions) => {
        const dialect = new SqliteDialect({
          database: new SQLite('/home/prathapchandra.moola/Desktop/Codebase/Personal/SQLite/fruits.db'),
        });
        return new Kysely({
          dialect,
          log: (event: LogEvent) => {
            Logger.warn({
              message: 'Kysely Details',
              query: event.query.query,
            });
            Logger.verbose({
              message: 'Running Query',
              parameters: event.query.parameters,
              raw: event.query.sql,
            });
            if (event.level === 'query') {
              Logger.verbose({
                message: 'Query Timing',
                duration: event.queryDurationMillis,
              });
            }
            if (event.level === 'error') {
              Logger.error({
                message: 'Error running query',
                error: event.error,
              });
            }
          },
        });
      },
    },
  ],
})
export class DatabaseModule extends ConfigurableDatabaseModule {}
