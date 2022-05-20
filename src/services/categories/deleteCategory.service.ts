import { Categories } from "../../entities/category.entity";
import { AppDataSource } from "../../data-source";
import { GetCategory } from "../../interfaces/categories/index";

const deleteCategoryService = async ({ id }: GetCategory) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categories = await categoryRepository.find();

  const category = categories.filter((category) => category.id === id);

  if (!category) {
    throw new Error("category not found");
  }

  return await categoryRepository.delete(id);
};

export default deleteCategoryService;
