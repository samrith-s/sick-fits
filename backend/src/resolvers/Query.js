const { forwardTo } = require('prisma-binding');

module.exports = {
  items: forwardTo('db')
  // async items(parent, args, context, info) {
  //   return await context.db.query.items();
  // }
};
