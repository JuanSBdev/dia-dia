const { DataTypes } = require("sequelize")

const Album = (sequelize)=>{

    sequelize.define('Album', {
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
        created:{
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: "2000-01-01"
            
        }
    },
    {
        timestamps:true,
        createdAt: "dateOfCre"
    },
    )
} 
    module.exports = { Album }