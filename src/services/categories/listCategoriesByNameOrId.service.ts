import { AppDataSource } from "../../data-source";
import { Categories } from "../../entities/category.entity";
import { INameOrId } from "../../interfaces/categories";

const listCategoriesByNameOrIdService = async ({ name_id }: INameOrId) => {
  const userRepository = AppDataSource.getRepository(Categories);
  const categories = await userRepository.find();

  let category = categories.find((category) => category.name === name_id);

  if (!category) {
    category = categories.find((category) => category.id === name_id);
  }

  if (!category) {
    throw new Error("Category not Found");
  }

  return category;
};
export default listCategoriesByNameOrIdService;
