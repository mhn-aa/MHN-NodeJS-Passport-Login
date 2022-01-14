const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

const users = [
  {
    username: "Mahan",
    password: "Gooz546",
  },
];

app.get("/", (req, res) => {
  res.send("salam");
});

app.post("/login", (req, res) => {
  const user = users.find(
    (user) =>
      user.username === req.body.username && user.password === req.body.password
  );
  if (user) {
    res.send({
      ok: true,
      username: user.username,
    });
  } else {
    res.send({
      ok: false,
      massage: "wrong user name or password",
    });
  }
});

app.listen(4000);
