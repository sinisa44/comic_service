const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: `${__dirname}/config.env` });

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connection successful"))
  .then(() =>
    app.listen(port, () => console.log(`App running on port ${port}`))
  )
  .catch((error) => console.log("error", error));
