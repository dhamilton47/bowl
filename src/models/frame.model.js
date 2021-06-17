module.exports = (sequelize, Sequelize) => {
  const Frame = sequelize.define("frame", {
    game_id: {
      type: Sequelize.INTEGER
    },
    frame_number: {
      type: Sequelize.INTEGER
    },
    score_before: {
      type: Sequelize.INTEGER
    },
    ball1: {
      type: Sequelize.INTEGER
    },
    ball2: {
      type: Sequelize.INTEGER
    },
    ball3: {
      type: Sequelize.INTEGER
    },
    bonus1: {
      type: Sequelize.INTEGER
    },
    bonus2: {
      type: Sequelize.INTEGER
    },
    score_after: {
      type: Sequelize.INTEGER
    },
    is_started: {
      type: Sequelize.BOOLEAN
    },
    is_ball3: {
      type: Sequelize.BOOLEAN
    },
    is_bonus1: {
      type: Sequelize.BOOLEAN
    },
    is_bonus2: {
      type: Sequelize.BOOLEAN
    }
  });

  return Frame;
};
