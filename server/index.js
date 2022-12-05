require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const Router = require('express')
const router = express.Router()
const { Pool } = require('pg')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'WORKING!!!' })
})
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'snake',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000

})

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' })
})

router.get('/getlist'), function (req, res, next) {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error('Error acuiring client', err.stack)
        }
        client.query(`SELECT * FROM users`,
            (err, result) => {
                release()
                if (err) {
                    return console.error('Error acuiring client', err.stack)
                }
                console.log(result.rows);
                res.send(result.rows)
            }
        )
    })
}

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start()

module.exports = router;