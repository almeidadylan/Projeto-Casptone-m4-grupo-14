import { Request, Response } from "express";
import listCategoriesByNameOrIdService from "../../services/categories/listCategoriesByNameOrId.service";

const listCategoriesByNameOrIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { name_id } = req.params;
    const categories = await listCategoriesByNameOrIdService({ name_id });

    return res.status(200).json(categories);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default listCategoriesByNameOrIdController;
