import express, {Express, Request, Response, Application, NextFunction,} from 'express';
import indexController from '../controllers/index';
import { Sequelize } from 'sequelize';

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const indexRouter = express.Router();

indexRouter.get('/:id', indexController.idChecker)


indexRouter.get('/', (req: Request, res: Response) => {
  res.json('Welcome to Express & TypeScript Server3423423');
});

export default indexRouter