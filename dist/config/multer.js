"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const storageTypes = {
    local: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path_1.default.resolve('https://s3.console.aws.amazon.com/s3/buckets/upload-capstone-m4-grupo-14?region=sa-east-1&tab=objects'));
        },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err);
                }
                ;
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            });
        }
    }),
    s3: (0, multer_s3_1.default)({
        s3: new aws_sdk_1.default.S3(),
        bucket: 'upload-capstone-m4-grupo-14',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err);
                }
                ;
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        }
    })
};
module.exports = {
    dest: path_1.default.resolve('https://s3.console.aws.amazon.com/s3/buckets/upload-capstone-m4-grupo-14?region=sa-east-1&tab=objects'),
    storage: storageTypes['s3'],
    limits: {
        fileSize: 25 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'audio/mp3',
            'audio/mp4',
            'audio/mpeg'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file type.'));
        }
        ;
    }
};
