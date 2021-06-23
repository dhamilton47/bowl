module.exports = (sequelize, Sequelize, DataTypes) => {
  const Game = sequelize.define("game", {
    matchId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    frame1: DataTypes.INTEGER,
    frame2: DataTypes.INTEGER,
    frame3: DataTypes.INTEGER,
    frame4: DataTypes.INTEGER,
    frame5: DataTypes.INTEGER,
    frame6: DataTypes.INTEGER,
    frame7: DataTypes.INTEGER,
    frame8: DataTypes.INTEGER,
    frame9: DataTypes.INTEGER,
    frame10: DataTypes.INTEGER,
    total_score: DataTypes.INTEGER,
    is_final: DataTypes.BOOLEAN
  });

  return Game;
};
