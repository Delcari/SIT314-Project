var User = require("../models/user");

module.exports = new (class UserController {
  async findById(ctx) {
    try {
      const user = await User.findOne({ id: ctx.params.id });
      if (!user) {
        ctx.throw(404);
      }
      ctx.body = user;
    } catch (err) {
      if (err.name === "CastError" || err.name === "NotFoundError") {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  async add(ctx) {
    try {
      const user = await new User(ctx.request.body).save();
      ctx.body = user;
    } catch (err) {
      ctx.throw(422);
    }
  }

  async auth(ctx) {
    try {
      const { username, password } = ctx.request.body;
      let user = await User.findOne({ username: username, password: password });
      if (!user) {
        user = { success: false };
        ctx.body = user;
      } else {
        ctx.body = user;
      }
    } catch (err) {
      if (err.name === "CastError") {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  async find(ctx) {
    ctx.body = await User.find();
  }
})();
