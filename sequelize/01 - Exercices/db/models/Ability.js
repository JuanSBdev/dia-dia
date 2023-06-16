const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "compositeIndex",

    },
    description: {
      type: DataTypes.STRING,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      unique: "compositeIndex",
      allowNull: false,
      validate:{
        min:{
          args: 10.0
        },
        max:{
          args: 250.0
        }
      }
    },
  },
   {
    timeStamps: false,
    
 }
  );
};