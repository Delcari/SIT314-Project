var Router = require("koa-router");
var UserControllers = require("../controllers/users");
var router = Router({
  prefix: "/user",
});

router.get("/:id", UserControllers.findById);
router.post("/add", UserControllers.add);
router.post("/auth", UserControllers.auth);
router.get("/", UserControllers.find);

module.exports = router;
