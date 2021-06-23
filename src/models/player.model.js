module.exports = (sequelize, Sequelize, DataTypes) => {
  const Player = sequelize.define("player", {
    teamId: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    year: DataTypes.INTEGER
  });

  return Player;
};
