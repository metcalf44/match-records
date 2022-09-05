const { response, request } = require('express')
const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const PORT = 3000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'results'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
    const results = await db.collection('results').find().toArray()
    const resultsScore = await db.collection('results').find().toArray()
    res.render('index.ejs', { teams: results })
})

app.post('/addResult', async (req, res) => {
    db.collection('results').insertOne({
        date: req.body.date, 
        month: req.body.month,
        homeTeam: req.body.homeTeam,
        score: req.body.score,
        awayTeam: req.body.awayTeam,
        scorer: req.body.scorer
    })
    .then(result => {
        console.log('result added')
        res.redirect('/')
    })
    .catch(error => console.log(error))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Its alive on ${PORT}`)
})