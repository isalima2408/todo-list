import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/app/todo/entity/todo.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mariadb',
    host: '127.0.0.1',
    port: 3306,
    database: 'todo',
    username: 'root',
    password: '123',
    entities: [Todo],
    synchronize: true,
}


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory: async () => {
                return {
                    ...dataSourceOptions,
                }
            },
        }),
    ],
})
export class DatabaseModule {}
