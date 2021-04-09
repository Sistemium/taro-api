import ModelSchema from 'sistemium-mongo/lib/schema';
export const CodeString = String;

export default new ModelSchema({
  collection: 'LocalizedString',
  schema: {
    code: String, // unique
    value: {
      ru: String,
      en: String,
    },
  },
}).model();
