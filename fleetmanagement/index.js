const express = require("express");
const app = express();
const logger = require("./middlewares/logger");
const notFound = require("./middlewares/notFound");
app.use(express.json());
app.use(logger);
app.use('/users', require('./routes/user.routes'));
app.use("/vehicles", require("./routes/vehicle.routes"));
app.use("/trips", require("./routes/trip.routes"));
app.use("/analytics", require("./routes/analytics.routes"));
app.use(notFound);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});