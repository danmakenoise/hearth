/* tslint:disable no-console */
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

import config from './db';
import bookmarksRouter from './routes/bookmarks';

mongoose
  .connect(config.DB)
  .then(
    () => console.log('Database is connected...'),
    error => console.log('Could not connect to database...', error)
  );

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', '..', 'public')));
app.use('/bookmarks', bookmarksRouter);

app.listen(4000, () => {
  console.log('Hearth is running on localhost:4000...');
});
