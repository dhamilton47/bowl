module.exports = (sequelize, Sequelize) => {
  const Bowling = sequelize.define("bowling", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Bowling;
};
