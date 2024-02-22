"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    constructor() {
        this.test1 = function (req, res, next) {
            console.log("1111");
            next();
        };
    }
    idChecker(req, res, next) {
        const mainUserId = '222';
        const banUserId = '333';
        const currentUserId = req.params.id;
        if (currentUserId === mainUserId) {
            this.test1(req, res, next);
            res.send(`MainUserID: ${currentUserId}`);
        }
        else if (currentUserId === banUserId) {
            next('test error');
        }
        else {
            res.send(`UserID: ${currentUserId}`);
        }
    }
}
exports.default = new IndexController();
