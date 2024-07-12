const express = require('express');
const { dbConnection } = require('./config/dbConnect');
const { router } = require('./routes/route');
const { UserModel } = require('./model/userModel');


const app = express();

app.use(express.json());

app.use('/', router)

UserModel.sync({force: true})

app.listen(3000, async()=>{
    console.log('Server is listen at port: 3000')
    await dbConnection()
})