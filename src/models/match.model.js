module.exports = (sequelize, Sequelize) => {
  const Match = sequelize.define("match", {
    team: {
      type: Sequelize.STRING
    },
    opponent: {
      type: Sequelize.STRING
    },
    home: {
      type: Sequelize.BOOLEAN
    },
    date: {
      type: Sequelize.DATE
    }
  });

  return Match;
};
