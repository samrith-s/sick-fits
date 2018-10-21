module.exports = {
  createDog(parent, args, context, info) {
    global.dogs = global.dogs || [];
    const newDog = {
      name: args.name
    };

    global.dogs.push(newDog);
    return newDog;
  }
};
