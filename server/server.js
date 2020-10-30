const express = require("express");
const app = express();
const mongoose = require("mongoose");

// mongodb+srv://<username>:<password>@cluster0.nw6ya.mongodb.net/<dbname>?retryWrites=true&w=majority

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://AB:ate511009@cluster0.nw6ya.mongodb.net/project0?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  console.log("AB db is connected");
}
connectDB();

// this takes the post body
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

// model
var schema = new mongoose.Schema({ email: "string", password: "string" });
var User = mongoose.model("User", schema);

// signup route api
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  let user = new User({
    email,
    password,
  });

  await user.save();
  res.json({ token: "1234567890" });
});

app.listen(5000, () => console.log("Green Legacy listening on port 5000!"));
