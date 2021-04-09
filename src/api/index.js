import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from '@koa/router';
import * as mongo from 'sistemium-mongo/lib/mongoose';
import { defaultRoutes } from 'sistemium-mongo/lib/api';
import models from '../models';

import assert from 'sistemium-mongo/lib/assert';

const { PORT } = process.env;
const app = new Koa();
const router = new Router();

app
  .use(logger())
  .use(koaBody())
  .use(router.routes());

defaultRoutes(router, models);

if (!module.parent) {

  assert(PORT, 'PORT must be specified');

  mongo.connect()
    .then(() => {
      app.listen(PORT);
    });

}

export default app;
