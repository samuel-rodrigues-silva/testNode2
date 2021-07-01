
const fetchAll = (req, res) => {
    res.send('fetch')
}

const create = (req, res) => {
    res.send('create')

}

const remove = (req, res) => {
    res.send('remove: ' + req.params.id)

}

module.exports = { fetchAll, create, remove }