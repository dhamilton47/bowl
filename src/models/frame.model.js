module.exports = (sequelize, Sequelize, DataTypes) => {
  const Frame = sequelize.define("frame", {
    gameId: DataTypes.INTEGER,
    frame_number: DataTypes.INTEGER,
    score_before: DataTypes.INTEGER,
    ball1: DataTypes.INTEGER,
    ball2: DataTypes.INTEGER,
    ball3: DataTypes.INTEGER,
    bonus1: DataTypes.INTEGER,
    bonus2: DataTypes.INTEGER,
    score_after: DataTypes.INTEGER,
    is_started: DataTypes.BOOLEAN,
    is_ball3: DataTypes.BOOLEAN,
    is_bonus1: DataTypes.BOOLEAN,
    is_bonus2: DataTypes.BOOLEAN,
  });

  return Frame;
};
