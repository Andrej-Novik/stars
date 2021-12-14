import connector from './connector'
import StarRepository from './stars'
import IDB, {
	IConnector,
	IStarsRepository,
} from './interfaces'

class DB implements IDB {
	connector: IConnector
	stars: IStarsRepository
	
	constructor() {
		this.connector = connector
		this.stars = StarRepository
	}
}
export default new DB()
