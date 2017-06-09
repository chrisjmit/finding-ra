'use strict';
module.exports = function(sequelize, DataTypes) {
  const Place = sequelize.define('Place', {
    name: {
      type: DataTypes.STRING,
    },
    place_id: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    sun_start: {
      type: DataTypes.TIME
    },
    sun_end: {
      type: DataTypes.TIME
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Place;
};