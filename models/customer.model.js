const { STRING } = require("sequelize/types")

module.exports = (sequelize, DataType) => {
    const Customer = sequelize.define('customer', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: DataType.STRING,
        nome: DataType.STRING,
        email: DataType.STRING
    }, {
        freezeTableName: true,
        timestamps: true
    })
    return Customer
}