'use strict';

module.exports = (sequelize, DataTypes) => {
  const Space = sequelize.define('Space', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    place_id: {
      type: DataTypes.STRING,
    },
    sun: {
      type: DataTypes.STRING
    },
  });
  return Space;
};
