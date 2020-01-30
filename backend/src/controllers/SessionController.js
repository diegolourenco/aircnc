const User = require("../models/User");

/**
 * SessionController
 */

module.exports = {
  async index(request, response) {
    const users = await User.find();

    return response.json(users);
  },
  async store(request, response) {
    const { email } = request.body;
    let user = await User.findOne({ email });

    // User not exists, then create the user
    if (!user) {
      user = await User.create({ email });
    }

    return response.json(user);
  },
  async show(request, response) {
    const { id } = request.params;
    const user = await User.findById(id);

    return response.json(user);
  },
  async update(request, response) {
    const { id } = request.params;
    const { email } = request.body;

    const userUpdated = await User.findByIdAndUpdate(id, { email });

    return response.json(userUpdated);
  },
  async destroy(request, response) {
    const { id } = request.params;

    const userDestroyed = await User.findByIdAndRemove(id);

    return response.json(userDestroyed);
  }
};
