const express = require("express");
const app = express();
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const routes = require("./routes");
const { connect_datadog } = require("./middlewares/datadog");

app.use(cookieParser());
app.use(express.json());
app.use(volleyball);
app.use(connect_datadog);
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running port 3000");
    });
  })
  .catch(console.error);
