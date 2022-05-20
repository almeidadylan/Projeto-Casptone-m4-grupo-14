import testeService from "../services/teste.service";
import { Request, Response } from "express";

const testeController = async (req: Request, res: Response ) => {
    try {
        const teste = await testeService();
        console.log("testndo", teste)

        return res.status(200).json({message: "deu tudo certo", teste: teste})
    } 
    catch (err) {
        return res.status(450).json("algo de errado não está certo!")
    }
}

export default testeController