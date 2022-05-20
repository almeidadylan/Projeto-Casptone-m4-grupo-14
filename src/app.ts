import express from "express";
import Routes from "./routers/routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(Routes);

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
});
