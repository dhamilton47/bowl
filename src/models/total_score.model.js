module.exports = (sequelize, Sequelize, DataTypes) => {
  const TotalScore = sequelize.define("total_score", {
    gameId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    is_final: DataTypes.BOOLEAN
  });

  return TotalScore;
};
