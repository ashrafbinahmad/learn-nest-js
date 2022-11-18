import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'db',
  entities: ['dist/**/entities/*.entity.js'],
  synchronize: true //USE ONLY IN STAGING, USE MIGRATION WHEN PRODUCTION https://typeorm.io/migrations
  

}

export default config;