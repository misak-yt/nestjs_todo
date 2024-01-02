"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
const database_module_1 = require("./database.module");
require("dotenv/config");
const typeorm_1 = require("typeorm");
exports.datasource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: database_module_1.entities,
    migrations: [database_module_1.migrationFilesDir],
    synchronize: false,
});
//# sourceMappingURL=database.source.js.map