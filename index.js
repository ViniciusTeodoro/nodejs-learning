const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoute");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app);

app.listen(3000, () => console.log("Server is Runing"));
