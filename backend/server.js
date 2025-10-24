const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

const PORT = process.env.PORT ?? 8000;

const users = [
  { id: 1, name: "Easin" },
  { id: 2, name: "Tanvir" },
];

app.get("/users", (req, res) => {
  return res.json(users);
});
app.listen(PORT, () => console.log(`server running ${PORT}`));
