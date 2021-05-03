import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from '@koa/router';
import { defaultRoutes } from 'sistemium-mongo/lib/api';
import map from 'lodash/map';
import assert from 'sistemium-mongo/lib/assert';
import log from 'sistemium-debug';

import models, { connect } from '../models';

const { PORT } = process.env;
const app = new Koa();
const router = new Router();
const { debug } = log('api');

app
  .use(logger())
  .use(koaBody())
  .use(router.routes());

defaultRoutes(router, map(models));

if (!module.parent) {

  assert(PORT, 'PORT must be specified');

  connect()
    // .then(archiveConnect)
    .then(() => {
      app.listen(PORT);
      debug('PORT', PORT);
    });

}

export default app;
