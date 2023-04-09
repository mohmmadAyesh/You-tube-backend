const dotenv = require('dotenv').config()

const { DATABASE_URL, PORT, NODE_ENV } = process.env;

const config = {
    database: {
        uri: DATABASE_URL
    },
    port: PORT || 5000,
    node_env: NODE_ENV
};

module.exports = config;