import { CodeString } from './LocalizedString';

export default {
  collection: 'ChapterData',
  schema: {
    chapterId: String,
    date: Date,
    notForAnimalId: String,
    hours: [{
      hourId: String,
      sectorId: CodeString,
      activatorId: CodeString,
    }],
  },
};
