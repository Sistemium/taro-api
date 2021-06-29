import { expect } from 'chai';
import { readJsonFile } from './fs';
import lo from 'lodash';
import dayjs from 'dayjs';

describe('Animals data', function () {

  before(async function () {
    this.animals = await readJsonFile('./static/animals.json');
    this.animalNames = await readJsonFile('./static/animalNames.json');
  });

  it('contains contiguous years', function () {

    const { animals } = this;

    const allYears = lo.flatten(lo.map(animals, 'years'));
    const sorted = lo.orderBy(allYears, 'dateB');

    const invalid = lo.filter(sorted, (year, idx) => {
      const dayNextE = dayjs(year.dateE).add(1, 'day');
      return !lo.find(sorted, next => dayjs(next.dateB).isSame(dayNextE))
        && (idx + 1) < sorted.length;
    });

    expect(sorted.length).not.equals(0);
    expect(invalid).to.eql([]);

  });

  it('has all properties', function () {
    const invalid = lo.filter(this.animals, animal => {
      const { nameId, notForId, incompatibleId } = animal;
      return !nameId || !notForId || !incompatibleId;
    });
    expect(invalid).to.eql([]);
  });

  it('notForId has valid values', function () {
    const invalid = lo.filter(this.animals, animal => {
      const { nameId, notForId } = animal;
      return notForId !== `${nameId.replace(/name/, 'not-for')}s`;
    });
    expect(invalid).to.eql([]);
  });

  it('incompatibles are valid animals', function () {
    const allIds = lo.map(this.animals, 'id');
    const incompatibleIds = lo.map(this.animals, 'incompatibleId');
    expect(lo.orderBy(allIds)).to.eql(lo.orderBy(incompatibleIds));
    expect(lo.uniq(incompatibleIds).length).equals(allIds.length);
  });

  it('name ids are valid', function () {
    const keyedNames = lo.keyBy(this.animalNames, 'id');
    const invalid = lo.filter(this.animals, animal => {
      const { nameId, notForId } = animal;
      return !keyedNames[nameId] || !keyedNames[notForId];
    });
    expect(invalid).to.eql([]);
  });

});
