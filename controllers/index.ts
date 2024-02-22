import {NextFunction, Request, Response} from "express";

class IndexController {
  test1 = function (req:Request, res:Response, next: NextFunction) {
    console.log("1111")
    next()
  }

  idChecker (req: Request, res: Response, next: NextFunction) {
    const mainUserId: string = '222';
    const banUserId: string = '333';
    const currentUserId: string = req.params.id;

   if (currentUserId === mainUserId) {
      this.test1(req, res, next)
      res.send(`MainUserID: ${currentUserId}`)
    } else if (currentUserId === banUserId) {
      next('test error')
    } else {
      res.send(`UserID: ${currentUserId}`)
    }
  }
}

export default new IndexController();