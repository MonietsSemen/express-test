"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../controllers/index"));
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const indexRouter = express_1.default.Router();
indexRouter.get('/:id', index_1.default.idChecker);
indexRouter.get('/', (req, res) => {
    res.json('Welcome to Express & TypeScript Server3423423');
});
exports.default = indexRouter;
