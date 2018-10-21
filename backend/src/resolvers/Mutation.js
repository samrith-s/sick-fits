module.exports = {
  async createItem(parent, args, context, info) {
    // TODO: check if they are logged in
    return await context.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
  }
};
