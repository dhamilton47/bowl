module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("team", {
    matchId: DataTypes.INTEGER,
    school_name: DataTypes.STRING,
    school_mascot: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  });

  return Team;
};
