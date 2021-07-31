const redis = require('redis')
const express = require('express')
const app = express()
const port = 3000

const client = redis.createClient({
  host: process.env.REDIS_HOST
})

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/redis', (req, res) => {
  client.incr('31', (err, reply) => {
    res.json({ value: reply });
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})