const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000
const {readFileSync,readdirSync} = require("fs")
const path = require('path')
const image = readFileSync('./box.jpeg')

readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))
app.use(express.static(path.join(__dirname, 'public')));

app.get("/ls", (req, res) => {
  res.sendFile(path.join(__dirname, 'box.jpeg'));
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});