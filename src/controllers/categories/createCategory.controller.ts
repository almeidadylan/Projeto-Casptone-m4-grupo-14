import { Request, Response } from "express";
import createCategoryService from "../../services/categories/createCategorie.service";

const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await createCategoryService({
      name,
    });

    return res.status(201).json(newCategory);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default createCategoryController;
