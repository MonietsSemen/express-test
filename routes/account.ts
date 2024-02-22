import express, {NextFunction, Request, Response, Router} from "express";

const accountRouter = Router();

accountRouter.get('/account', (req:Request, res:Response, next: NextFunction) => {

  res.send('Hello it is account page');
})

export default accountRouter;