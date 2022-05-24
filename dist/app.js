"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appErros_1 = require("./errors/appErros");
const routes_1 = __importDefault(require("./routers/routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.default);
app.use((err, req, res, _) => {
    if (err instanceof appErros_1.AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            messsage: err.message
        });
    }
    console.error(err);
    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});
