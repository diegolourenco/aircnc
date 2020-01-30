const Booking = require("../models/Booking");

module.exports = {
  async index(request, response) {
    const bookings = await Booking.find();

    return response.json(bookings);
  },
  async store(request, response) {
    const { user_id: user } = request.headers;
    const { spot_id: spot } = request.params;
    const { date } = request.body;

    const booking = await Booking.create({
      user,
      spot,
      date
    });

    await booking
      .populate("user")
      .populate("spot")
      .execPopulate();

    return response.json(booking);
  },
  async destroyAll(request, response) {
    const bookings = await Booking.remove();
    return response.json(bookings);
  }
};
