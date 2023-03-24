const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  // Write the data to a file
  fs.writeFile(
    "data.txt",
    `${name}, ${email}, ${phone}\n`,
    { flag: "a" },
    (err) => {
      if (err) throw err;
      console.log("Data has been written to file");
    }
  );

  res.render("thank-you");
});
const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
