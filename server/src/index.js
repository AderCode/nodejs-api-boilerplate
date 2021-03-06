import 'babel-polyfill';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

const CLIENT_PATH = join(__dirname, '../../client');

let app = express();

app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH));
app.use(express.json());

app.use('/api', routes);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});