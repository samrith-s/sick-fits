module.exports = {
  dogs(parent, args, context, info) {
    global.dogs = global.dogs || [];
    return global.dogs;
  }
};
