const User = require("../models/User");
const Spot = require("../models/Spot");
const Booking = require("../models/Booking");
const parseStringToArray = require("../utils/parseStringToArray");

module.exports = {
  async index(request, response) {
    const { tech } = request.query;
    const spots = await Spot.find({ techs: tech });

    return response.json(spots);
  },
  async show() {},
  async store(request, response) {
    const { user_id } = request.headers;
    const { filename } = request.file;
    const { company, techs, price } = request.body;

    const user = await User.findById(user_id);

    // If user doesn't exists, then return a error 400
    if (!user) {
      return response.status(400).json({ error: "User doesn't exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: parseStringToArray(techs),
      price
    });

    return response.json(spot);
  },
  async update() {},
  async destroy(request, response) {
    const { spot_id } = request.params;
    
    await Booking.deleteMany({ spot: spot_id });
    const spot = await Spot.deleteMany({ _id: spot_id });

    return response.json(spot);
  }
};
