const { Op } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const { UserModel } = require("../models/userModel");

const testFunction = async (req, res) => {

    // ************************* find by Primary key **************************
    // const data = await UserModel.findByPk(10);
    // return res.json(data)


    // ************************* find One **************************
    // const data = await UserModel.findOne({ where: { firstName: 'vivek' } })
    // return res.json(data)


    // ************************* findOrCreate **************************
    const [data,created] = await UserModel.findOrCreate({ 
        where: { firstName: 'manoj' },
        defaults: {
            firstName: 'xyz',
            lastName: 'verma'
          }
     })
    return res.json({data,created})


}

module.exports = { testFunction }