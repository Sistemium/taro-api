import ModelSchema from 'sistemium-mongo/lib/schema';

import Chapter from './Chapter';
import ChapterData from './ChapterData';
import Hour from './Hour';
import LocalizedString from './LocalizedString';

export default {
  Chapter: new ModelSchema(Chapter).model(),
  ChapterData: new ModelSchema(ChapterData).model(),
  Hour: new ModelSchema(Hour).model(),
  LocalizedString: new ModelSchema(LocalizedString).model(),
};
