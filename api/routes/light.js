var Router = require("koa-router");
var LightControllers = require("../controllers/lights");
var router = Router({
  prefix: "/light",
});

router.get("/:id", LightControllers.findById);
router.get("/user/:id", LightControllers.findByUID);
router.post("/add", LightControllers.add);
router.get("/", LightControllers.find);

module.exports = router;
