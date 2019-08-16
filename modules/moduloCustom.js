const hoy = () => {
    const moment = require ("moment")
    return moment(new Date()).format("DD/MM/YYYY")
}

module.exports = hoy;