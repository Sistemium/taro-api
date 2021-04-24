import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import logger from 'koa-logger';
import Router from '@koa/router';
import { defaultRoutes } from 'sistemium-mongo/lib/api';
import models from '../models';
import map from 'lodash/map';

import assert from 'sistemium-mongo/lib/assert';

const { PORT } = process.env;
const app = new Koa();
const router = new Router();

app
  .use(logger())
  .use(koaBody())
  .use(router.routes());

defaultRoutes(router, map(models));

if (!module.parent) {

  assert(PORT, 'PORT must be specified');

  models.connect()
    .then(() => {
      app.listen(PORT);
      console.info('PORT', PORT);
    });

}

export default app;

// export function defaultRoutes(router, models = []) {
//
//   models.forEach(model => {
//
//     const { collection: name } = model;
//
//     debug('defaultRoutes for:', name);
//
//     router.post(`/${name}/:id?`, postHandler(model));
//     router.put(`/${name}/:id?`, postHandler(model));
//     router.get(`/${name}`, getManyHandler(model));
//     router.get(`/${name}/:id`, getHandler(model));
//     router.delete(`/${name}/:id`, delHandler(model));
//
//   });
//
// }
