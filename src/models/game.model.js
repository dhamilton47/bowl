module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("game", {
    player_name: {
      type: Sequelize.STRING
    },
    player_id: {
      type: Sequelize.INTEGER
    },
    team_id: {
      type: Sequelize.INTEGER
    },
    match_id: {
      type: Sequelize.INTEGER
    },
    frame1: {
      type: Sequelize.INTEGER
    },
    frame2: {
      type: Sequelize.INTEGER
    },
    frame3: {
      type: Sequelize.INTEGER
    },
    frame4: {
      type: Sequelize.INTEGER
    },
    frame5: {
      type: Sequelize.INTEGER
    },
    frame6: {
      type: Sequelize.INTEGER
    },
    frame7: {
      type: Sequelize.INTEGER
    },
    frame8: {
      type: Sequelize.INTEGER
    },
    frame9: {
      type: Sequelize.INTEGER
    },
    frame10: {
      type: Sequelize.INTEGER
    },
    total_score: {
      type: Sequelize.INTEGER
    }
  });

  return Game;
};
