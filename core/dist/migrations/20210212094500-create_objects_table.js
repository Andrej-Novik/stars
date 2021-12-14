"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStarsTable20210212094500 = void 0;
const typeorm_1 = require("typeorm");
class CreateStarsTable20210212094500 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'stars',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'galaxy',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'img',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'text',
                    type: 'varchar',
                    isNullable: false,
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('stars');
    }
}
exports.CreateStarsTable20210212094500 = CreateStarsTable20210212094500;
