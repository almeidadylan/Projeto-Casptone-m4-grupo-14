import { AppDataSource } from "../../data-source";
import { Categories } from "../../entities/category.entity";

const listCategoriesService = async () => {
  const userRepository = AppDataSource.getRepository(Categories);
  const categories = await userRepository.find();

  return categories;
};
export default listCategoriesService;