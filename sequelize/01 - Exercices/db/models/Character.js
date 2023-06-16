const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      race:{
         type: DataTypes.ENUM,
         values:['Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'],
         defaultValue: 'Other',
         allowNull: true,
         
      },
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
      },
      code:{
         type: DataTypes.STRING,
         primaryKey: true,
         allowNull: false,
         validate: {
            len: [1,5],
            custom(value){
               if(value && value.toUpperCase() === 'HENRY' )
               throw new Error('error')
            }
          }
       },
       name:{
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
         validate:{
            notIn: [[ "Henry",  "SoyHenry", "Soy Henry"]],
         }
       },
       
       age:{
         type: DataTypes.INTEGER,
         allowNull: false,
       },
       hp:{
         type: DataTypes.FLOAT,
         allowNull: false,
       },
       mana: {
         type: DataTypes.FLOAT,
         allowNull: false,
       },

   },
   {
      timestamps: false,
   }
   );
};
