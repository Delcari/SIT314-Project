const Koa = require("koa");
var rTest = require('./routes/test.js');
var rUser = require('./routes/user.js')
var rLight = require('./routes/light.js')
const mongoose = require("mongoose");
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


port = process.env.PORT
host = process.env.DB_HOST;
user = process.env.DB_USER;
password = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${user}:${password}@project.tx22r.mongodb.net/project?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.connection.on("error", console.error);

const app = new Koa();
app.use(cors({ origin: "*" }))
app.use(bodyParser())
app.use(rUser.routes());
app.use(rLight.routes());
app.use(rTest.routes());


app.listen(port, () =>
  console.log(`The server is running at http://localhost:${port}/`)
);