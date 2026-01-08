// eslint-disable-next-line @typescript-eslint/no-require-imports
const articles = require("./articlesDatabase.json");

module.exports = {
  async up(db) {
    await db.collection("articles").insertOne({
      id: 4,
      img: "/articles/article-1.jpg",
      title: "Режим использования масок и перчаток на территории магазинов",
      text: "Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'. Информация обновляется каждый будний день.",
      createdAt: "2025-06-01",
    });
  },

  // async down(db) {},
};
