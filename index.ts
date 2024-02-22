import express, {Application, NextFunction, Router, Request, Response} from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';
import accountRouter from './routes/account';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use('/', indexRouter);
app.use('/', accountRouter);

app.use((req: Request, res: Response) => {
    res.status(404).send('Oops, something wrong....');
});


app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});