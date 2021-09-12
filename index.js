const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi There! Ready for Nodejs in Multi-Thread Mode!?");
})

const port = 3000;
app.listen(port, () => {
    console.log(`server runing on port ${port}`);
})