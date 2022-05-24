import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appErros";
import Routes from "./routers/routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(Routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if ( err instanceof AppError ) {
        return res.status(err.statusCode).json({
            status: "error",
            messsage: err. message
        })
    }

    console.error(err)
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
});
