const { STRING } = require("sequelize/types")

module.exports = (sequelize, DataType) => {
    const Bills = sequelize.define('Bills', {
        amount: DataType.LONG,
        product: DataType.STRING,
        paymentMethod: DataType.STRING,
        customer: DataType.STRING
    }, {
        freezeTableName: true,
        timestamps: true
    })
    return Bills
}