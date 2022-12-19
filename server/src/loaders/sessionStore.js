const MongoStore = require('connect-mongo');
const config = require('../config/config');

const mongoStore = () => MongoStore.create({
    mongoUrl: config.MONGODB_URI,
    dbName: config.DB_NAME,
    stringify: false,
    autoRemove: 'interval',
    autoRemoveInterval: 1 // In minutes
})
module.exports = mongoStore
