// eslint-disable-next-line @typescript-eslint/no-require-imports
const users = require('./usersDatabase.json')

module.exports = {
  async up(db) {
    await db.collection('users').insertMany(users)
  },
 
  async down(db) {
    const ids = users.map(a => a._id).filter(Boolean);

    if (ids.length > 0) 
      { await db.collection("users").deleteMany({ _id: { $in: ids } }); } 
    else {
      const names = users.map(a => a.name);
      await db.collection("users").deleteMany({ name: { $in: names } });
    }
  },
};
