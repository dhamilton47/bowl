module.exports = (sequelize, Sequelize, DataTypes) => {
  const Match = sequelize.define("match", {
    home_team: DataTypes.STRING,
    away_team: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE
  });

  return Match;
};
