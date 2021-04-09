import { assert, expect } from 'chai';
import supertest from 'supertest';

import app from '../src/api';
import { checkConnectMongo } from './helpers';

const api = supertest(app.callback());

describe('Chapter API', function () {

  before(checkConnectMongo);

  it('should accept object by POST', async function () {

    const props = {
      id: 'm-star-test',
      title: 'Money Star',
      description: 'Money Star description',
      info: 'Money Star instructions',
    };

    const { body: chapter } = await api
      .post('/Chapter')
      .send(props)
      .expect(200);

    expect(chapter).to.deep.include(props);

    const { id: createdChapterId } = chapter;

    await api.delete(`/Chapter/${createdChapterId}`)
      .expect(204);

  });

});
