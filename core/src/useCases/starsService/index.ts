import StarRepository from "../../repository/database/stars";
class StarsService {
  getList = async () => {
    const { value, error } = await StarRepository.getList();
    if (error) return { error: error };
    return { value: value };
  };
  getStar = async (id: string) => {
    const { value, error } = await StarRepository.getStar(id);
    console.log(value);
    if (error) return { error: error };
    return { value: value };
  };
  createStar = async (
    name: string,
    galaxy: string,
    img: string,
    text: string
  ) => {
    const { value, error } = await StarRepository.createStar(
      name,
      galaxy,
      img,
      text
    );
    if (error) return { error: error };
    return { value: value };
  };
  deleteStar = async (id: string) => {
    const { value, error } = await StarRepository.deleteStar(id);
    if (error) return { error: error };
    return { value: value };
  };
  getStarByName = async (name: string) => {
    const { value, error } = await StarRepository.getStarByName(name);
    if (error) return { error: error };
    return { value: value };
  };
  getStarsByQuery = async () => {
    const { value, error } = await StarRepository.getStarsByQuery();
    if (error) return { error: error };
    return { value: value };
  };
}
export default new StarsService();
