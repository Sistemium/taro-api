import ModelSchema from 'sistemium-mongo/lib/schema';
export const CodeString = String;

export default new ModelSchema({
  collection: 'ChapterData',
  schema: {
    chapterId: String,
    date: Date,
    hours: [{
      hourId: String,
      sector: CodeString,
      activator: CodeString,
      excludes: CodeString,
    }],
  },
}).model();
