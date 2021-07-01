const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require('./routes/billsRouter.js')
app.use(express.json());
app.use('/api/v1/bills', router);
app.listen(8080 || PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})

module.exports = app