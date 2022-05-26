import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, cpf, birth_date, phone, pix, age } =
      req.body;

    await userUpdateService({
      id,
      name,
      email,
      password,
      cpf,
      birth_date,
      phone,
      pix,
      age,
    });

    return res.status(200).json({ message: "Updated category" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default userUpdateController;
