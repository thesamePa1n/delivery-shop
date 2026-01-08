// eslint-disable-next-line @typescript-eslint/no-require-imports
const articles = require("./articlesDatabase.json");

module.exports = {
  async up(db) {
    await db.collection("articles").insertMany(articles)
  },

  async down(db) {
    const ids = articles.map(a => a._id).filter(Boolean);

    if (ids.length > 0) 
      { await db.collection("articles").deleteMany({ _id: { $in: ids } }); } 
    else {
      const titles = articles.map(a => a.title);
      await db.collection("articles").deleteMany({ title: { $in: titles } });
    }
  },
};
