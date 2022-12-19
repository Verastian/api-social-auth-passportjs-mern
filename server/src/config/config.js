const { config } = require("dotenv");

config();
const { env } = process
module.exports = {

    MONGODB_URI: env.MONGO_URI || "mongodb://localhost:27017/testdb",
    DB_NAME: env.DB_NAME || 'testdb',
    PORT: env.PORT || 3000,
    API: { PREFIX: env.API || '/api/v1' },

    ClIENT_URL: env.ClIENT_URL,
    JWT_SECRET: env.JWT_SECRET,

    GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: env.GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK: env.GOOGLE_CALLBACK,

    GHUB_CLIENT_ID: env.GHUB_CLIENT_ID,
    GHUB_CLIENT_SECRET: env.GHUB_CLIENT_SECRET,
    GHUB_CALLBACK: env.GHUB_CALLBACK,

    COOKIE_NAME: 'sid',
}    