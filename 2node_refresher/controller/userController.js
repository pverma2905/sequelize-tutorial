const { UserModel } = require("../models/userModel");

const insert = async (req,res)=>{

    //create
    // const data =  UserModel.build({ name: 'Jane' });
    // // console.log(data.name)
    // await data.save()
          // or
    // const data = await UserModel.create({ name: 'pranav' });
    // console.log(data.toJSON())


    //update
    // const data = await UserModel.create({ name: 'pranav' });
    // //data.name = 'piyush';
    // data.set({
    //     name:'abc',
    //     favoriteColor:'black'
    // })
    // await data.save();
                //or
    // const data = await UserModel.create({ name: 'pranav' });
    // //data.name = 'piyush';
    // await data.update({name:"prrrrrrrrrr"})
    // await data.save();


    // destroy
    // await data.destroy();



    // add some field
    // const data = await UserModel.create({ name: 'pranav' });
    // data.age = 30;
    // data.favoriteColor = 'blue';
    // await data.save({ fields: ['name','age'] });


    // increment and decrement
    const data = await UserModel.create({ name: 'Jane', age: 100 });
    await data.increment('age', { by: 2 });



}

module.exports={insert}