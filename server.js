const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

//initializing middleware
//earlier, it was required to install body parser, but now it is a built-in function
//function of express. it parses incoming JSON payload
app.use(express.json({ extended: false }));

//just a test route
app.get("/", (req, res) => res.send("Hello World"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));
app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
