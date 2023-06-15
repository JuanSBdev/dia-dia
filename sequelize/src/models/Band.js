const { DataTypes } = require("sequelize")

const Band = (sequelize)=>{

    sequelize.define('Band', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{ 
            type: DataTypes.STRING,
            allowNull: true, 
            unique: true,
        },
        origin:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "unknown"
            
        }
    },
    {
        timestamps:true,
        createdAt: "dateOfCre"
    },
    )
} 
    module.exports = { Band }