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

db.matches.hasMany(db.teams);
db.teams.belongsTo(db.matches);

db.matches.hasMany(db.games);
db.games.belongsTo(db.matches);

db.teams.hasMany(db.players);
db.players.belongsTo(db.teams);

db.players.hasMany(db.games);
db.games.belongsTo(db.players);

db.games.hasMany(db.frames);
db.frames.belongsTo(db.games);

db.frames.hasMany(db.balls);
db.balls.belongsTo(db.frames);

// db.games.hasMany(db.total_scores);
// db.total_scores.belongsTo(db.games);



module.exports = db;
