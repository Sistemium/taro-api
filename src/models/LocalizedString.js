export const CodeString = String;

export default {
  collection: 'LocalizedString',
  schema: {
    id: CodeString,
    source: String,
    value: {
      ru: String,
      en: String,
    },
  },
};
