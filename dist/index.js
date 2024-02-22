"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const account_1 = __importDefault(require("./routes/account"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, morgan_1.default)('tiny'));
app.use('/', index_1.default);
app.use('/', account_1.default);
app.use((req, res) => {
    res.status(404).send('Oops, something wrong....');
});
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
