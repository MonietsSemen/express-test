"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountRouter = (0, express_1.Router)();
accountRouter.get('/account', (req, res, next) => {
    res.send('Hello it is account page');
});
exports.default = accountRouter;
