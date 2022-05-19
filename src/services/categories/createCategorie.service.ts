import { Categories } from "../../entities/category.entity";
import { ICreateCategory } from "../../interfaces/categories/index";
import { AppDataSource } from "../../data-source";

const createCategoryService = async ({ name }: ICreateCategory) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = new Categories();
  category.name = name;

  categoryRepository.create(category);
  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;
