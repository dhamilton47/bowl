module.exports = (sequelize, Sequelize) => {
  const Ball = sequelize.define("ball", {
    pins: {
      type: Sequelize.INTEGER
    }
  });

  return Ball;
};
