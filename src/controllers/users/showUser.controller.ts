import { Request, Response } from "express";
import showUserService from "../../services/user/showUser.service";

const showUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const user = await showUserService({ id });

    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({ error: err.name, message: err.message });
    }
  }
};

export default showUserController;