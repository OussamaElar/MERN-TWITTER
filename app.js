const express = require("express");
const app = express();

//mongodb+srv://admin:<password>@mern.nsxy7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => {
      res.send("Hello");
})

const port = process.env.PORT || 5000;
app.listen(port , () => (console.log(`lestning on port ${port}`)))