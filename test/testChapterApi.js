import { assert, expect } from 'chai';
import supertest from 'supertest';

import app from '../src/api';
import { beforeEachReset, checkConnectMongo } from './helpers';

const api = supertest(app.callback());

describe('Chapter API', function () {

  before(checkConnectMongo);

  beforeEach(beforeEachReset);

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

    props.descriptionId = null;

    const { body: updated } = await api
      .post(`/Chapter/${props.id}`)
      .send(this.props)
      .expect(200);

    expect(updated.descriptionId).equals(null);

    await api.delete(`/Chapter/${createdChapterId}`)
      .expect(204);

  });

  it('should create object with defaults', async function () {

    const props = {
      titleId: 'Money Star',
    };

    const { body: chapter } = await api
      .post('/Chapter')
      .send(props)
      .expect(200);

    expect(chapter.id).not.null;
    expect(chapter.cts).not.null;
    expect(chapter.ts).not.null;

  });

});
