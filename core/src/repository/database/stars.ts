import { v4 as uuidv4 } from "uuid";
import { StarItem } from "../../models/dbm/star";
import { IStarsRepository } from "./interfaces";
import DBConnector from "./connector";

class StarRepository implements IStarsRepository {
  getList = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getStar = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .findOne({ where: { id } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  createStar = async (
    name: string,
    galaxy: string,
    img: string,
    text: string
  ) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .save({ name, galaxy, img, text });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  deleteStar = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .delete(id);
      return { value: !!response.affected };
    } catch (e) {
      return { error: e };
    }
  };
  getStarByName = async (name: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .findOne({ where: { name } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getStarsByQuery = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(StarItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
}
export default new StarRepository();
