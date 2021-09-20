var Router = require('koa-router');
var router = Router({
  prefix: ''
});

router.get('/', (ctx) => {  
    ctx.body = "The API is Live!"
});

module.exports = router;