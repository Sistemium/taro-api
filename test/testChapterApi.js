import { assert, expect } from 'chai';
import supertest from 'supertest';

import app from '../src/api';
import { checkConnectMongo } from './helpers';

const api = supertest(app.callback());

describe('Chapter API', function () {

  before(checkConnectMongo);

  it('should accept object by POST', async function () {

    await api.get('/Chapter')
      .expect(204);

    const props = {
      id: 'm-star-test',
      titleId: 'Money Star',
      descriptionId: 'Money Star description',
      infoId: 'Money Star instructions',
    };

    const { body: chapter } = await api
      .post('/Chapter')
      .send(props)
      .expect(200);

    expect(chapter).to.deep.include(props);

    const { id: createdChapterId } = chapter;

    await api.get('/Chapter')
      .expect(200);

    await api.delete(`/Chapter/${createdChapterId}`)
      .expect(204);

  });

});
