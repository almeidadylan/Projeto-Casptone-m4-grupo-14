import userDeleteService from "../../services/user/userDelete.service";
import { Request, Response } from "express";

const userDeleteController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = userDeleteService(id);

        return res.status(200).json({
            status: "ok",
            message: "user deleted"
        });

    } catch (err) {
        if ( err instanceof Error ) {
            res.status(409).json({
                status: "error",
                message: "unable to delete user"
            });
        };
    };
};

export default userDeleteController;