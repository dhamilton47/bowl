module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    school_name: {
      type: Sequelize.STRING
    },
    school_mascot: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    }
  });

  return Team;
};
