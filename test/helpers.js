import { assert } from 'chai';
import { connect as archiveConnect } from 'sistemium-mongo/lib/mongoose';
import { connect } from '../src/models';

export async function checkConnectMongo() {
  const { MONGO_URL } = process.env;
  assert(MONGO_URL, 'Must be set MONGO_URL variable');
  await connect();
  await archiveConnect();
  console.info('connected', MONGO_URL);
}
