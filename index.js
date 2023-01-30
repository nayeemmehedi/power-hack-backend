const express = require("express");
const cors = require("cors");
// https://lazy-plum-cape-buffalo-gown.cyclic.app/

const mongoose = require("mongoose");
const powerHack = require("./router/addBilling.router");
const signUp = require("./router/signup.router");
const login = require("./router/login.router");

require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://localhost:27017/power-hack");

async function main() {
  const uri =
    `mongodb+srv://${process.env.MONGO_CN}:${process.env.MONGO_PW}@cluster0.teacx.mongodb.net/${process.env.MONGO_DB}`;
  await mongoose.connect(uri);

  // await mongoose.connect("mongodb+srv://connect-db:1xp5KCxVCGVC2QgE@cluster0.teacx.mongodb.net/multerLearning");
}

main()
  .then(() => console.log("connect successfully.."))
  .catch((err) => console.log(err));

app.use("/api", powerHack);
app.use('/',(req,res)=>{
  res.send("hello world")

})

app.use("/api/signup",signUp)
app.use("/api/login",login)

app.listen(process.env.PORT || 4000);
