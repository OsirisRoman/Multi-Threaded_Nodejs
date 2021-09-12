const express = require("express");
const app = express();

function doWork(duration) {
    const start = Date.now();
    while(Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
    doWork(5000);
    res.send("Hi There! Ready for Nodejs in Multi-Thread Mode!?");
})

const port = 3000;
app.listen(port, () => {
    console.log(`server runing on port ${port}`);
})