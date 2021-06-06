import { CodeString } from './LocalizedString';

export default {
  collection: 'Chapter',
  schema: {
    name: String,
    titleId: CodeString,
    descriptionId: CodeString,
    infoId: CodeString,
    useActivators: Boolean,
  },
};
