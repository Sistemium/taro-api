import { expect } from 'chai';
import { readJsonFile } from './fs';
import lo from 'lodash';
import dayjs from 'dayjs';

describe('Animals data', function () {

  it('contains contiguous years', async function () {

    const animals = await readJsonFile('./static/animals.json');
    const allYears = lo.flatten(lo.map(animals, ({ data: { years } }) => years));
    const sorted = lo.orderBy(allYears, 'dateB');

    const invalid = lo.filter(sorted, (year, idx) => {
      const dayNextE = dayjs(year.dateE).add(1, 'day');
      return !lo.find(sorted, next => dayjs(next.dateB).isSame(dayNextE))
        && (idx + 1) < sorted.length;
    });

    expect(invalid).to.eql([]);

  });

});
