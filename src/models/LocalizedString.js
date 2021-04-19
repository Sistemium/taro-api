export const CodeString = String;

export default {
  collection: 'LocalizedString',
  schema: {
    id: CodeString,
    value: {
      ru: String,
      en: String,
    },
  },
};
