module.exports = (sequelize, Sequelize, DataTypes) => {
  const Player = sequelize.define("player", {
    schoolId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  return Player;
};
