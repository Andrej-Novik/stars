import { createConnection, Connection } from "typeorm";

class DBConnector {
  connector: Connection;

	createConnection = async () => {
		this.connector = await createConnection({
			type: 'postgres',
			host: "localhost",
			username: "postgres",
<<<<<<< HEAD
			password: "postgres",
=======
			password: "Robin_2002",
>>>>>>> 635697720a8c5b6a04e531be99b4bd6fbf16b0d4
			database: "stars",
			entities: ['dist/models/dbm/*{.ts,.js}'],
			migrations: ['dist/migrations/*{.ts,.js}'],
			logging: true,
		})
		const isMigrationsNeed = await this.connector.showMigrations()
		if (isMigrationsNeed) {
			console.log('STARTING MIGRATION')
			await this.connector.runMigrations()
			console.log('MIGRATION SUCCEED')
		}
	}
}
export default new DBConnector();
