import { entities, migrationFilesDir } from './database.module';
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const datasource: DataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  entities: entities,
  migrations: [migrationFilesDir],
  synchronize: false,
});
