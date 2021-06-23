const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8080;

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  webpackDevMiddleWare(compiler, {
    publicPath: config.output.publicPath,
  })
);

const db = require('./src/models');
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get('/', function(req, res) {
  res.sendFile(config.output.path + '/index.html');
});

require('./src/routes/match.routes')(app);
require('./src/routes/team.routes')(app);
require('./src/routes/player.routes')(app);
require('./src/routes/game.routes')(app);

app.listen(port, function() {
  console.log(`Listening on Port: ${port}!\n`);
});