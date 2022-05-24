"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const uploadMusicController = (request, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { originalname, key, size, location } = request.file;
        const upload = {
            id: (0, uuid_1.v4)(),
            name: originalname,
            key,
            size,
            url: location,
        };
        res.json({
            status: "ok",
            message: "upload done",
            upload: upload,
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({
                status: "error",
                message: "Invalid file type.",
            });
        }
    }
});
exports.default = uploadMusicController;
