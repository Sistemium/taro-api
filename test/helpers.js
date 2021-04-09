import { assert } from 'chai';
import * as mongo from 'sistemium-mongo/lib/mongoose';

export async function checkConnectMongo () {
  assert(process.env.MONGO_URL, 'Must be set MONGO_URL variable');
  await mongo.connect();
}
