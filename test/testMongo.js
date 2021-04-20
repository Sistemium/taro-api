import { assert, expect } from 'chai';

import models from '../src/models';
import { checkConnectMongo } from './helpers';

describe('Mongo models', function () {

  before(checkConnectMongo);

  it('should create LocalizedString', async function () {

    const props = {
      id: 'm-star-test',
      value: { en: 'Money Star', ru: 'Денежная Звезда' },
    };

    const { LocalizedString } = models;

    const inserted = await LocalizedString.create(props);

    expect(inserted.toObject()).to.deep.include(props);

    await LocalizedString.deleteOne({ id: props.id });

  });

});
