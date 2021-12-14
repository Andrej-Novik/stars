import StarsService from "./starsService"

class UseCases {
	StarsService;
  constructor() {
		this.StarsService = StarsService;
  }
}
export default new UseCases();
