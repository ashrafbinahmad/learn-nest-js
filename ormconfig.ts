import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/**/entities/*.entity.js'],
  synchronize: true //USE ONLY IN STAGING
}

export default config;