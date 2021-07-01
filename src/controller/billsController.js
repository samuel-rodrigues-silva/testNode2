
const database = new Map()

const fetch = (req, res) => {
    const id = req.params.id

    if (database.has(id)) {
        const values = Array.from(database.values()).filter(customer => customer.customer == id)
        res.status(200).send(values);
    } else {
        res.status(404).send({
            message: 'customer not found'
        })
    }
}

const create = (req, res) => {
    const body = req.body
    database.set(body.customer, body)
    res.status(201).send(body).send(database.values())

}

const remove = (req, res) => {
    const id = req.params.id

    if (database.has(id)) {
        deleteBills(id)
        const customer = database.get(id)
        database.delete(id)
        res.status(200).send(customer)

    } else {
        res.status(404).send({
            message: 'id not found'
        })
    }
}

const deleteBills = (id) => {
    const items = Array.from(database.values())
        .filter(customer => customer.customer === id)

    items.forEach(dependent => {
        database.delete(dependent.customer)
    })
}

module.exports = { fetch, create, remove }