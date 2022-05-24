"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const tokenAuth = (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ message: "JWT is missing" });
    }
    try {
        const [, token] = authHeader.split(" ");
        const secret = process.env.SECRET_KEY || "default";
        const decoded = (0, jsonwebtoken_1.verify)(token, secret);
        const { sub } = decoded;
        request.user = {
            id: sub,
        };
        return next();
    }
    catch (err) {
        throw new Error("Invalid token");
    }
};
exports.default = tokenAuth;
