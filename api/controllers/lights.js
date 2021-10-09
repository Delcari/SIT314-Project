var Light = require("../models/light");

module.exports = new (class LightsController {
  async findById(ctx) {
    try {
      const light = await Light.findOne({ id: ctx.params.id });
      if (!light) {
        ctx.throw(404);
      }
      ctx.body = light;
    } catch (err) {
      if (err.name === "CastError" || err.name === "NotFoundError") {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  async add(ctx) {
    try {
      const light = await new Light(ctx.request.body).save();
      ctx.body = light;
    } catch (err) {
      ctx.throw(422);
    }
  }

  async find(ctx) {
    ctx.body = await Light.find();
  }
})();
