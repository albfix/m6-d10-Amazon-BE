const { Pool } = require("pg")

const pool = new Pool()

module.exports = { query: (text, params) => pool.query(text, params) }

//////IMPORTANTE, METODO PER PASSARE INFORMAZIONI CON L'APPLICAZIONE