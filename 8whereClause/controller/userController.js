const { Op } = require("sequelize");
const { sequelize } = require("../config/dbConnect");
const { UserModel } = require("../models/userModel");

const testFunction = async (req, res) => {
    //Filter query (SELECT * FROM ...... WHERE id=2 AND isActive = true)
    // ************************** where *******************************
    // const data = await UserModel.findAll({
    //     where:{
    //         id:3,
    //         // firstName: 'vivek',
    //         isActive: true
    //     }
    // });
    // return res.json(data)

    // const data = await UserModel.findAll({
    //     where:{
    //         id:[2,3,5],
    //         // firstName: 'vivek',
    //         isActive: true
    //     }
    // });
    // return res.json(data)

     // ************************** where operator *******************************

    //Using sequelize operator

    // ************************** equal operator *******************************

    // const data  = await UserModel.findAll({
    //     where:{
    //         id:{
    //             [Op.eq] : 2           
    //         }
    //     }
    // });
    // return res.json(data)

    // ************************** in operator *******************************

    // const data  = await UserModel.findAll({
    //     where:{
    //         id:{
    //             [Op.in] : [2,3,5]           
    //         }
    //     }
    // });
    // return res.json(data)

   // ************************** and operator *******************************

    // const data  = await UserModel.findAll({
    //     where:{
    //         [Op.and]:[{id:3}, {isActive:true}]
    //     }
    // });
    // return res.json(data)


    // const data  = await UserModel.findAll({
    //     where:{
    //         // id:{
    //         //     // [Op.eq] : 2
    //         //     // [Op.in] : [2,3,5, 50]
               
    //         // }
    //         [Op.and] : [{id:3}, {isActive: true}]
    //     }
    // });
    // return res.json(data)

    // ************************** update *******************************

    // const updateUser = await UserModel.update(
    //     {
    //         lastName: 'jone',
    //         age: 40
    //     },
    //     {
    //         where:{
    //             id:50
    //         }
    //     }
    // )
    // return res.json(updateUser)

    // ************************** delete *******************************

    // const deleteData =  await UserModel.destroy({
    //     where:{
    //         id:2
    //     }
    // });
    // return res.json(deleteData)

}

module.exports = { testFunction }