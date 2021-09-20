const Koa = require("koa");
var test = require('./routes/test.js');

const port = 3000;
const app = new Koa();

app.use(test.routes());

app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);