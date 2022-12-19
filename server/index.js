// const cookieSession = require("cookie-session");
const express = require("express");
// const cors = require("cors");
// const passportSetup = require("./passport");
// const passport = require("passport");
// const authRoute = require("./routes/auth");
const app = express();
const { PORT } = require('./src/config/config');
const loaders = require('./src/loaders')
// app.use(
//   cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
// );

// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.json({ limit: '50mb' }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

// app.use("/auth", authRoute);

// app.listen("4000", () => {
//   console.log("Server is running!");
// });


async function run() {
  // const app = express();

  await loaders({ expressApp: app });

  const server = app.listen(PORT, () => {
    const port = server.address().port;
    console.info(`Server listening on port: ${port} 🛡️`);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });
}

run();