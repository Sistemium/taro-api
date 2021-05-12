import { CodeString } from './LocalizedString';

export default {
  collection: 'ChapterData',
  schema: {
    chapterId: String,
    date: Date,
    hours: [{
      hourId: String,
      sectorId: CodeString,
      activatorId: CodeString,
      excludeZodiacId: CodeString,
    }],
  },
};
