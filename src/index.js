const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require('./routes/index.js')
app.use(express.json());
app.use('/test2', router);
app.listen(PORT || 8080, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})

module.exports = app