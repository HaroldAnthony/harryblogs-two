const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//just a test route
app.get("/", (req, res) => res.send("Hello World"));
app.post("/",(req, res) => res.send("Hello World"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
