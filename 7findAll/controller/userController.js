const { sequelize } = require("../config/dbConnect");
const { UserModel } = require("../models/userModel");

const testFunction = async (req, res) => {
    //To insert data in db
    /*
    const newUser = {
        firstName: 'vivek',
        lastName: 'kumar',
        email: 'vivek@gmail.com',
        password: 'Admin@123',
        age: 40,
    }
    const users = [
        {
            firstName: 'vivek',
            lastName: 'kumar',
            email: 'vivek@gmail.com',
            password: 'Admin@123',
            age: 40,
        },
        {
            firstName: 'aarav',
            lastName: 'sharma',
            email: 'aarav.sharma@example.com',
            password: 'Aarav@123',
            age: 29,
        },
        {
            firstName: 'anaya',
            lastName: 'verma',
            email: 'anaya.verma@example.com',
            password: 'Anaya#456',
            age: 25,
        },
        {
            firstName: 'krishna',
            lastName: 'iyer',
            email: 'krishna.iyer@example.com',
            password: 'Krishna@789',
            age: 34,
        },
        {
            firstName: 'neha',
            lastName: 'patel',
            email: 'neha.patel@example.com',
            password: 'Neha@2022',
            age: 28,
        },
        {
            firstName: 'rohan',
            lastName: 'singh',
            email: 'rohan.singh@example.com',
            password: 'Rohan@345',
            age: 32,
        },
        {
            firstName: 'sanya',
            lastName: 'gupta',
            email: 'sanya.gupta@example.com',
            password: 'Sanya@678',
            age: 27,
        },
        {
            firstName: 'rahul',
            lastName: 'mishra',
            email: 'rahul.mishra@example.com',
            password: 'Rahul@901',
            age: 37,
        },
        {
            firstName: 'riya',
            lastName: 'nair',
            email: 'riya.nair@example.com',
            password: 'Riya@234',
            age: 30,
        },
        {
            firstName: 'arjun',
            lastName: 'joshi',
            email: 'arjun.joshi@example.com',
            password: 'Arjun@567',
            age: 35,
        },
    ];
    *********** single user add *************************
//   const userDetails = await UserModel.create(newUser);


  ********************* multiple add ********************
  const userDetails = await UserModel.bulkCreate(users);
  return res.json(userDetails);
  */

  //Select queries (SELECT * FROM ......)
  /*
  ******************* findAll *****************
  const users = await UserModel.findAll();
  return res.json(users);
  */

  //Specifying attributes only (SELECT firstName, lastName FROM .....)
  
  /*
  const users =  await UserModel.findAll({
    attributes:['firstName', 'lastName']
  });
  return res.json(users);
  */

  //Attributes can be rename (SELECT firstName as FN, lastName as LN FROM .....)
   /* ************************* aggregate ******************************
  /*
  const users =  await UserModel.findAll({
    attributes:[['firstName', 'FN'], ['lastName', 'LN']]
  })
  return res.json(users);
  */

  //Aggregation using sequelize function (SELECT count(firstName) as count FROM .....)
 /* ************************* sum ******************************
  const firstNameCount = await UserModel.findAll({
    attributes:[[sequelize.fn('SUM', sequelize.col('id')), 'sum' ]]
  })

 ************************ count ******************************
   const firstNameCount1 = await UserModel.findAll({
     attributes:[[sequelize.fn('COUNT', sequelize.col('firstName')), 'COUNT' ]]
   })   
  return res.json(firstNameCount);
*/


 
//*************************** include ********************************
//  const result = await UserModel.findAll({
//   attributes: {
//     include: [[sequelize.fn('COUNT', sequelize.col('firstName')), 'Count']]
//   }
// })
//  return res.json(result);


 // *************************** exclude ********************************

// const userDetails = await UserModel.findAll({
//     attributes:{
//         exclude:['firstName', 'password']
//     }
// })
//   return res.json(userDetails);


}

module.exports = { testFunction }