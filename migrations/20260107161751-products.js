// eslint-disable-next-line @typescript-eslint/no-require-imports
const products = require('./productsDatabase.json')

module.exports = {
  async up(db) {
    await db.collection('products').insertMany(products)
  },
 
  async down(db) {
    const ids = products.map(a => a._id).filter(Boolean);

    if (ids.length > 0) 
      { await db.collection("products").deleteMany({ _id: { $in: ids } }); } 
    else {
      const titles = products.map(a => a.title);
      await db.collection("products").deleteMany({ title: { $in: titles } });
    }
  },
};
