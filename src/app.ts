import express from "express";
import globalErrorsMiddleware from "./middlewares/globalErrors.middleware";
import routerUsers from "./routers/user.routes";
import routerMusics from "./routers/music.routes";
import routerCategory from "./routers/category.routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routerUsers);

app.use(routerMusics);

app.use(routerCategory);

app.use(globalErrorsMiddleware);

app.listen(port, () => {
  console.log(`server rodando na porta ${port}`);
});
