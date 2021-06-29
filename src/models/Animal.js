import { CodeString } from './LocalizedString';

export default {
  collection: 'Animal',
  schema: {
    nameId: CodeString,
    notForId: CodeString,
    incompatibleId: String,
    years: [{ _id: false, dateB: String, dateE: String }],
  },
};
