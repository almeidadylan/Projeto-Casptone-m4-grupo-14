import { Request, Response } from "express";
import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteCategoryService({ id });

    return res.status(200).json({ message: "Deleted category " });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.name, message: err.message });
    }
  }
};

export default deleteCategoryController;
