const { sequelize } = require('../config/dbConnect')

const { DataTypes } = require('sequelize');


const UserModel = sequelize.define('user',{
    // name: DataTypes.TEXT,
    // favoriteColor: {
    //   type: DataTypes.TEXT,
    //   defaultValue: 'green',
    // },
    // age: DataTypes.INTEGER,
    // cash: DataTypes.INTEGER
  },
  {
    // Other model options go here
    freezeTableName: true
  },
);

module.exports={UserModel}