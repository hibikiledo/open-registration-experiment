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

app.get('/redis', async (req, res) => {
  const value = await new Promise((resolve, reject) => {
    client.incr('31', (err, reply) => {
      if (err) reject(err)
      else resolve(reply)
    })
  })
  res.json({ value })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})