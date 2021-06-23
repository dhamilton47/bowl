const dbConfig = require('../../config/db.config.js');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.matches = require('./match.model.js')(sequelize, DataTypes);
db.players = require('./player.model.js')(sequelize, DataTypes);
db.teams = require('./team.model.js')(sequelize, DataTypes);
db.games = require('./game.model.js')(sequelize, DataTypes);
db.frames = require('./frame.model.js')(sequelize, DataTypes);
db.balls = require('./ball.model.js')(sequelize, DataTypes);
//db.total_scores = require('./total_score.model.js')(sequelize, DataTypes);

module.exports = db;
