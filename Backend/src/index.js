const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { ConnectMongoDB } = require("./database/dbConnect");

ConnectMongoDB(process.env.MONGO_URI);
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/user"));
app.use("/student", require("./routes/student"));
app.use("/course", require("./routes/course"));
app.use("/enrollment", require("./routes/enrollment"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
