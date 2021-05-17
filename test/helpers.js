// import { assert } from 'chai';
// import { mongoose } from 'sistemium-mongo/lib/mongoose';
import { mongoose } from 'sistemium-data/src/MongoStoreAdapter';
import { connect } from '../src/models';
import { MockMongoose } from 'mock-mongoose';

const mockMongoose = new MockMongoose(mongoose);

export async function checkConnectMongo() {
  // const { MONGO_URL } = process.env;
  // assert(MONGO_URL, 'Must be set MONGO_URL variable');
  await mockMongoose.prepareStorage();
  await connect();
  // await archiveConnect();
  // console.info('connected', MONGO_URL);
}

export async function beforeEachReset() {
  await mockMongoose.helper.reset();
}
