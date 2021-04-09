import ModelSchema from 'sistemium-mongo/lib/schema';
import { CodeString } from './LocalizedString';

export default new ModelSchema({
  collection: 'Hour',
  schema: {
    timeB: String,
    timeE: String,
    animal: CodeString,
  },
}).model();
