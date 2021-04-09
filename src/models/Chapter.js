import ModelSchema from 'sistemium-mongo/lib/schema';
import { CodeString } from './LocalizedString';

export default new ModelSchema({
  collection: 'Chapter',
  schema: {
    title: CodeString,
    description: CodeString,
    info: CodeString,
  },
}).model();
