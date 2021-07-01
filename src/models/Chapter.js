import { CodeString } from './LocalizedString';

export default {
  collection: 'Chapter',
  schema: {
    name: String,
    titleId: CodeString,
    descriptionId: CodeString,
    infoId: CodeString,
    compassInfoId: CodeString,
    useActivators: Boolean,
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
