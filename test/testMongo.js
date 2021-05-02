import { expect } from 'chai';

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

    const inserted = await LocalizedString.createOne(props);

    expect(inserted).to.deep.include(props);

    await LocalizedString.destroy(props.id);

  });

});
