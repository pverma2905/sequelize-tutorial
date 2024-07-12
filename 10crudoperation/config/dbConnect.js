const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('world', 'root', 'root',{
    host:'localhost',
    port: 3306,
    dialect:'mysql',
    logging:false
});

const dbConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Db connected')
    } catch (error) {
        console.log(`Unable to connect db`, error)
    }
};

module.exports = {
    dbConnection,
    sequelize
}