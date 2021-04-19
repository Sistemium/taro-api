import { CodeString } from './LocalizedString';

export default {
  collection: 'ChapterData',
  schema: {
    chapterId: String,
    date: Date,
    hours: [{
      hourId: String,
      sector: CodeString,
      activator: CodeString,
      excludes: CodeString,
    }],
  },
};
