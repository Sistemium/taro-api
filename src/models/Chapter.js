import { CodeString } from './LocalizedString';

export default {
  collection: 'Chapter',
  schema: {
    name: String,
    title: CodeString,
    description: CodeString,
    info: CodeString,
  },
};
