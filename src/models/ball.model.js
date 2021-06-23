module.exports = (sequelize, Sequelize, DataTypes) => {
  const Ball = sequelize.define("ball", {
    frameId: DataTypes.INTEGER,
    pins: DataTypes.INTEGER,
    pin1: DataTypes.BOOLEAN,
    pin2: DataTypes.BOOLEAN,
    pin3: DataTypes.BOOLEAN,
    pin4: DataTypes.BOOLEAN,
    pin5: DataTypes.BOOLEAN,
    pin6: DataTypes.BOOLEAN,
    pin7: DataTypes.BOOLEAN,
    pin8: DataTypes.BOOLEAN,
    pin9: DataTypes.BOOLEAN,
    pin10: DataTypes.BOOLEAN,
  });

  return Ball;
};
