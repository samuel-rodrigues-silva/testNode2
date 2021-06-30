const express = require("express");
const app = express();
const PORT = 8080;
const router = require('./routes/index.js')
app.use(express.json());
app.use('/test2', router);
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})

module.exports = app