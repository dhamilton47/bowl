module.exports = (sequelize, Sequelize) => {
  const TotalScore = sequelize.define("total_score", {
    game_id: {
      type: Sequelize.INTEGER
    },
    score: {
      type: Sequelize.INTEGER
    },
    is_final: {
      type: Sequelize.BOOLEAN
    }
  });

  return TotalScore;
};
