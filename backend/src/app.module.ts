import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'node:path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { configProvider } from './app.config.provider';
import { TaskModule } from './tasks/tasks.module';
import { UserModule } from './authorizationdata/authorizationdata.module';
import { UsersTasksModule } from './usersTasks/usersTasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'db',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TaskModule,
    UserModule,
    UsersTasksModule,
  ],
  controllers: [],
  providers: [configProvider],
})
export class AppModule {}
