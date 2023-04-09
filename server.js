const { port } = require('./config/enviroment');
const app = require('./app.js');
const dbConnection = require('./db/connection');

dbConnection()

const server = app.listen(port, () => {
    console.log(` server is listening on port ${port} `);
})