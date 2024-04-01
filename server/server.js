const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");

const users = [];

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/register", (req, res) => {
    console.log(req.body);

    
})

app.listen(4004, () => console.log("Running on port 4004"));