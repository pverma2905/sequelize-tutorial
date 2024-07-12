const express = require('express');
const { router } = require('./routes/router');
const { dbConnection, sequelize } = require('./config/dbConnect');

const app = express();

// Use the defined router for handling routes
app.use('/', router);

// Synchronize models with the database
(async () => {
    try {
        await sequelize.sync({ force: false });
        console.error('Database synchronizing successfully')
    } catch (error) {
        console.error('Error Synchronizing database:', error)
    }
})();

// Start the server after establishing database connection
app.listen(3000, async () => {
    try {
        await dbConnection();
        console.log("Server is litening at port:3000");
    } catch (error) {
        console.error('Error starting server:', error);
    }
});